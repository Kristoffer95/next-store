'use server';

import { stripe } from '@/hooks';
import { Product } from '@/types/stripe/product';
import { cartIdCookie, setCartIdCookie } from '@/utils/cookies';
import { prisma } from '@/utils/prisma';
import { unstable_cache as cache, revalidateTag } from 'next/cache';

let cartId = cartIdCookie();

export const getCartAction = cache(
  async () => {
    try {
      if (!cartId) return [];

      const cartItem = await prisma.cartItem.findMany({
        where: {
          cartId: cartId,
        },
      });

      const productsRaw = await stripe.products.list({
        expand: ['data.default_price'],
      });

      const products: Product[] = productsRaw.data;

      const filteredProducts =
        products.filter((product: Product) =>
          cartItem.map((item) => item.productId).includes(product.id)
        ) || [];

      const transformedProducts = filteredProducts.map((product: Product) => {
        return {
          ...product,
          cartItem: cartItem.find((item) => item.productId === product.id),
        };
      });

      return transformedProducts;
    } catch (error) {
      throw new Error('Failed getting cart items' + error);
    }
  },
  ['cart'],
  {
    tags: ['cart'],
  }
);

export const addToCartAction = async (prevState: any, formData: FormData) => {
  const { quantity, productId } = Object.fromEntries(formData.entries());

  try {
    if (!cartId) {
      const newCart = await prisma.cart.create({});
      const newCartId = await setCartIdCookie(newCart.id);

      console.log('newCartId');
      console.log(newCartId);

      cartId = newCartId;
    }

    const productExists = await prisma.cartItem.findFirst({
      where: {
        productId: productId as string,
        cartId: cartId,
      },
    });

    if (productExists) {
      await prisma.cartItem.update({
        where: {
          id: productExists.id,
        },
        data: {
          quantity: productExists.quantity + +quantity,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          productId: productId as string,
          cartId: cartId as number,
          quantity: +quantity,
        },
      });
    }

    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed adding product to cart' + error);
  }
};

export const removeCartProductAction = async (
  id: number | string | undefined
) => {
  if (!id) throw new Error('No product id provided');

  try {
    await prisma.cartItem.delete({
      where: {
        id: id?.toString(),
        cartId: cartId,
      },
    });

    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed removing product from cart' + error);
  }
};

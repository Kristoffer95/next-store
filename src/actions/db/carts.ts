'use server';

import { stripe } from '@/hooks';
import { Product } from '@/types/stripe/product';
import { prisma } from '@/utils/prisma';
import { unstable_cache as cache, revalidateTag } from 'next/cache';

const cartId = 1;

export const getCartAction = cache(
  async () => {
    try {
      const cartItem = await prisma.cartItem.findMany({
        where: {
          cartId,
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

export const addToCartAction = async (productId: string) => {
  try {
    const productExists = await prisma.cartItem.findFirst({
      where: {
        productId,
        cartId,
      },
    });

    if (productExists) {
      await prisma.cartItem.update({
        where: {
          id: productExists.id,
        },
        data: {
          quantity: productExists.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          productId,
          cartId,
          // TODO: to be updated to the actual quantity
          quantity: 1,
        },
      });
    }

    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed adding product to cart' + error);
  } finally {
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
        cartId,
      },
    });

    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed removing product from cart' + error);
  }
};

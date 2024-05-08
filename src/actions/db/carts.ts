'use server';

import { prisma } from '@/utils/prisma';
import { unstable_cache as cache, revalidateTag } from 'next/cache';

const cartId = 1;

export const getCartAction = cache(
  async () => {
    const cart = await prisma.cartProducts.findMany({
      where: {
        cartId,
      },
      include: {
        product: true,
      },
    });

    return cart;
  },
  ['cart'],
  {
    tags: ['cart'],
  }
);

export const addToCartAction = async (productId: number) => {
  try {
    // check if product already exists in cart
    const product = await prisma.cartProducts.findFirst({
      where: {
        productId,
        cartId,
      },
    });

    if (product) {
      await prisma.cartProducts.update({
        where: {
          id: product.id,
        },
        data: {
          quantity: product.quantity + 1,
        },
      });

      revalidateTag('cart');
      return;
    }

    await prisma.cartProducts.create({
      data: {
        productId,
        cartId,
        quantity: 1,
      },
    });

    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed adding product to cart' + error);
  }
};

export const removeCartProductAction = async (id: number) => {
  try {
    await prisma.cartProducts.delete({
      where: {
        id,
      },
    });

    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed removing product from cart' + error);
  }
};

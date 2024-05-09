'use server';
import { prisma } from '@/utils/prisma';
import { revalidateTag, unstable_cache as cache } from 'next/cache';

export const getProductsAction = cache(
  async () => {
    const products = await prisma.product.findMany();

    return products;
  },
  ['products'], // not sure yet how this works
  {
    tags: ['products'],
  }
);

export const getProductAction = cache(
  async (id: string) => {
    const product = await prisma.product.findFirst({
      where: {
        id: +id,
      },
    });

    return product;
  },
  ['product'], // not sure yet how this works
  {
    tags: ['product'],
  }
);

export const createProductAction = async (
  prevState: any,
  formData: FormData
) => {
  const { name, price, description } = Object.fromEntries(formData.entries());

  try {
    const product = await prisma.product.create({
      data: {
        name: name as string,
        price: +price as number,
        description: description as string,
      },
    });
    revalidateTag('products');

    return product;
  } catch (error) {
    throw new Error('Failed to create product' + error);
  }
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  const { id, name, price, description } = Object.fromEntries(
    formData.entries()
  );

  try {
    const product = await prisma.product.update({
      where: {
        id: +id,
      },
      data: {
        name: name as string,
        price: +price as number,
        description: description as string,
      },
    });
    revalidateTag('products');

    return product;
  } catch (error) {
    throw new Error('Failed to update product' + error);
  }
};

export const removeProductAction = async (id: number) => {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    revalidateTag('products');

    // for `onDelete: 'CASCADE'` in prisma schema
    revalidateTag('cart');
  } catch (error) {
    throw new Error('Failed to remove product' + error);
  }
};

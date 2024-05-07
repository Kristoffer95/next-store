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

export const createProductAction = async (formData: FormData) => {
  const { name, price, description } = Object.fromEntries(formData.entries());

  try {
    await prisma.product.create({
      data: {
        name: name as string,
        price: +price as number,
        description: description as string,
      },
    });
    revalidateTag('products');
  } catch (error) {
    throw new Error('Failed to create product' + error);
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
  } catch (error) {
    throw new Error('Failed to remove product' + error);
  }
};

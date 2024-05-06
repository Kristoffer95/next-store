'use server';
import { prisma } from '@/utils/prisma';
import { revalidateTag, unstable_cache as cache } from 'next/cache';

export const getProducts = cache(
  async () => {
    const products = await prisma.product.findMany();

    return products;
  },
  ['products'], // not sure yet on what this does
  {
    tags: ['products'],
  }
);

export const createProduct = async (formData: FormData) => {
  try {
    await prisma.product.create({
      data: {
        name: formData.get('name') as string,
      },
    });
    revalidateTag('products');
  } catch (error) {
    console.log(error);
  }
};

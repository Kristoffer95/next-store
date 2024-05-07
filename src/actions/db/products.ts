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

export const createProductAction = async (formData: FormData) => {
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

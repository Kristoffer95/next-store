'use server';
import { prisma } from '@/utils/prisma';
import { revalidateTag, unstable_cache as cache } from 'next/cache';

export const createUserAction = async (prevState: any, formData: FormData) => {
  const { name, email, password } = Object.fromEntries(formData.entries());

  try {
    const emailExists = await prisma.user.findFirst({
      where: {
        email: email as string,
      },
    });

    if (emailExists) {
      throw new Error('Email already exists');
    }

    const user = await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: password as string,
      },
    });

    return user;
  } catch (error) {
    throw new Error('Failed to create user' + error);
  }
};

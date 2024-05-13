'use server';
import { signIn } from '@/auth';
import { prisma } from '@/utils/prisma';
import { AuthError } from 'next-auth';
import { revalidateTag, unstable_cache as cache } from 'next/cache';
import { isRedirectError } from 'next/dist/client/components/redirect';

export const loginUserAction = async (prevState: any, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData.entries());

  try {
    await signIn('credentials', {
      email: email as string,
      password: password as string,
      redirectTo: '/profile',
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof Error) {
      const { type, cause } = error as AuthError;
      switch (type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        case 'CallbackRouteError':
          return cause?.err?.toString();
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
  }
};

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

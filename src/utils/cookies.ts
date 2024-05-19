import { cookies } from 'next/headers';

export const cartIdCookie = () => {
  const cookieStore = cookies();
  const cartIdCookie = cookieStore.get('cartId');
  return cartIdCookie?.value ? +cartIdCookie?.value : undefined;
};

export const setCartIdCookie = (id: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    try {
      const thirtyDaysInSeconds = 30 * 24 * 60 * 60; // Convert 30 days to seconds

      cookies().set('cartId', id.toString(), {
        maxAge: thirtyDaysInSeconds,
      });
      resolve(id);
    } catch (error) {
      reject(error);
    }
  });
};

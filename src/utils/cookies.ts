import { cookies } from 'next/headers';

export const cartIdCookie = () => {
  const cookieStore = cookies();
  const cartIdCookie = cookieStore.get('cartId');
  return cartIdCookie?.value ? +cartIdCookie?.value : undefined;
};

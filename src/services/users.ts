import { db } from '@/db';

export const getProducts = async () => {
  return await db.query.products.findMany();
  // return await db.query.cartProducts.findMany({
  //   with: {
  //     product: true,
  //   },
  // });
};

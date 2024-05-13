'use server';

import { stripe } from '@/hooks';
import { Product } from '@/types/stripe/product';
import { unstable_cache as cache, revalidateTag } from 'next/cache';

const cartId = 1;

export const getProducts = cache(
  async () => {
    const stripeProducts = await stripe.products.list({
      limit: 3,
      expand: ['data.default_price'],
    });

    const products: Product[] = stripeProducts.data;

    return products;
  },
  ['stripe-products'],
  {
    tags: ['stripe-products'],
  }
);
'use server';

import { stripe } from '@/hooks';
import { Product } from '@/types/stripe/product';
import { unstable_cache as cache } from 'next/cache';

export const getProducts = cache(
  async () => {
    const stripeProducts = await stripe.products.list({
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

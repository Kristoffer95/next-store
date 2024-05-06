'use client';

import { addToCart } from '@/actions/db/carts';
import { Product } from '@prisma/client';
import React, { useState } from 'react';

type Props = {
  product: Product;
};

function AddToCart({ product }: Props) {
  const [loading, setLoading] = useState(false);

  async function ATC(id: number) {
    setLoading(() => true);
    await addToCart(id);
    setLoading(() => false);
  }

  return (
    <button
      type='submit'
      onClick={() => ATC(product?.id)}
      className={`w-full py-5 text-lg rounded-sm , ${
        loading ? 'bg-green-200 text-black' : 'bg-green-500'
      }`}>
      {loading ? 'Adding to cart...' : 'Add to cart'}
    </button>
  );
}

export default AddToCart;

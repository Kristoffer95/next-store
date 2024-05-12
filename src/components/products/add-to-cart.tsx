'use client';

import { useState } from 'react';

// Actions
import { addToCartAction } from '@/actions/db/carts';

// icons
import { PiShoppingCartBold } from 'react-icons/pi';
import { Product } from '@/types/stripe/product';

type Props = {
  product: Product;
};

function AddToCart({ product }: Props) {
  const [loading, setLoading] = useState(false);

  async function ATC(id: string) {
    setLoading(() => true);
    await addToCartAction(id);
    setLoading(() => false);
  }

  return (
    <button
      type='button'
      onClick={() => ATC(product.id)}
      className={`flex items-center justify-center bg-gray-900 px-2 py-2 text-sm text-white transition hover:bg-gray-700 , ${
        loading ? 'bg-green-200 text-black' : 'bg-green-500'
      }`}>
      <PiShoppingCartBold className='text-xl mr-2' />
      {loading ? 'Adding to cart...' : 'Add to cart'}
    </button>
  );
}

export default AddToCart;

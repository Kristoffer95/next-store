'use client';

import { Product } from '@/types/stripe/product';
import React, { useState } from 'react';
import AddToCart from './add-to-cart';
import { addToCartAction } from '@/actions/db/carts';
import { useFormState } from 'react-dom';

type Props = {
  product: Product;
};

function ProductCartForm({ product }: Props) {
  const [_state, action] = useFormState(addToCartAction, null);
  const [quantity, setQuantity] = useState(1);

  function quantityUpdate(updateType: 'increment' | 'decrement') {
    if (updateType === 'increment') {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  }

  return (
    <form action={action}>
      <div className='flex justify-between'>
        <AddToCart product={product} />
        <div className='flex items-center border border-black/10 rounded-sm'>
          <button
            className='px-3 border-r'
            type='button'
            onClick={() => quantityUpdate('decrement')}>
            -
          </button>
          <input type='hidden' name='productId' value={product.id} />
          <input
            type='number'
            className='w-[60px] outline-none px-2 text-center text-sm'
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(+e.target.value)}
            name='quantity'
          />
          <button
            className='px-3 border-l'
            type='button'
            onClick={() => quantityUpdate('increment')}>
            +
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductCartForm;

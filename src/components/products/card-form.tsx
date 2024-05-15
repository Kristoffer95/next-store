'use client';

import { Product } from '@/types/stripe/product';
import React from 'react';
import AddToCart from './add-to-cart';
import { addToCartAction } from '@/actions/db/carts';
import { useFormState } from 'react-dom';

type Props = {
  product: Product;
};

function ProductCartForm({ product }: Props) {
  const [_state, action] = useFormState(addToCartAction, null);

  return (
    <form action={action}>
      <div className='flex justify-between'>
        <AddToCart product={product} />
        <div className='flex items-center border border-black/10 rounded-sm'>
          <button className='px-3  border-r' type='button'>
            -
          </button>
          <input type='hidden' name='productId' value={product.id} />
          <input
            type='number'
            className='w-[60px] outline-none px-2 text-center text-sm'
            defaultValue={1}
            min={1}
            name='quantity'
          />
          <button className='px-3 border-l' type='button'>
            +
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductCartForm;

import { removeCartProductAction } from '@/actions/db/carts';
import RemovecartProduct from '@/components/cart/remove-cart-product';
import { Product } from '@/types/stripe/product';
import Image from 'next/image';
import React from 'react';

type Props = {
  product: Product;
};

function CartItemComponent({ product }: Props) {
  return (
    <div className='flex border rounded'>
      {/* image */}
      <div className='relative flex size-[80px] overflow-hidden'>
        <Image
          alt='sample product image'
          src={
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80'
          }
          width={100}
          height={80}
          objectFit='cover'
        />
      </div>
      <div className='w-[calc(100%_-_80px)] px-3 py-3 flex justify-between'>
        <div className='flex flex-col justify-between h-full'>
          <h5 className='text-lg capitalize'>{product.name}</h5>
          <p className='text-sm'>$100.00</p>
        </div>
        <div className='flex flex-col justify-between items-end h-full'>
          <RemovecartProduct
            removeFromCart={async () => {
              'use server';
              await removeCartProductAction(product.id);
            }}
          />
          <p className='text-sm'>Qty: {product.cartItem?.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;

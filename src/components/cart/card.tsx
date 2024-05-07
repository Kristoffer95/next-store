import { CartProducts, Product } from '@prisma/client';
import React from 'react';
import RemovecartProduct from './remove-cart-product';
import { removeCartProductAction } from '@/actions/db/carts';

type Props = {
  // TODO: rename schema to CartProduct
  cartProduct: CartProducts & {
    product: Product;
  };
};

async function CartCard({ cartProduct }: Props) {
  return (
    <div className=''>
      <h4>
        Name: {cartProduct.product.name}
        <RemovecartProduct
          removeFromCart={async () => {
            'use server';
            await removeCartProductAction(cartProduct.id);
          }}
        />
      </h4>
    </div>
  );
}

export default CartCard;

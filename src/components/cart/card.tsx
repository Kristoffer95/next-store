import { CartProducts, Product } from '@prisma/client';
import React from 'react';
import RemovecartProduct from './remove-cart-product';

type Props = {
  // NOTE: rename schema to CartProduct
  cartProduct: CartProducts & {
    product: Product;
  };
};

async function CartCard({ cartProduct }: Props) {
  return (
    <div className=''>
      <h4>
        Name: {cartProduct.product.name}
        {/* removeFromCart={async () => {
          'use server';
          await removeCartProduct(cartProduct.id);
        }} */}
        <RemovecartProduct cartProductId={cartProduct.id} />
      </h4>
    </div>
  );
}

export default CartCard;

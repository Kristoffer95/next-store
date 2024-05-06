import { getCart } from '@/actions/db/carts';
import CartCard from '@/components/cart/card';
import React from 'react';

async function CartPage() {
  const cart = await getCart();

  return (
    <div className='container'>
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

      <div className='flex flex-col items-start space-y-3'>
        {cart.map((item) => (
          <CartCard key={item.id} cartProduct={item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;

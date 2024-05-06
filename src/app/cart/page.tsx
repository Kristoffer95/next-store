import { getCart } from '@/actions/db/carts';
import React from 'react';

async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}

export default CartPage;

'use client';

import { removeCartProduct } from '@/actions/db/carts';

function RemovecartProduct({ cartProductId }: { cartProductId: number }) {
  async function removeFromCart(id: number) {
    await removeCartProduct(id);
  }

  return (
    <button
      className='border border-black px-2 mx-5 z-100'
      onClick={() => removeFromCart(cartProductId)}>
      x
    </button>
  );
}

export default RemovecartProduct;

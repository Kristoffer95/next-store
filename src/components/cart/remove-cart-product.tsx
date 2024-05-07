'use client';

import { PiTrashLight } from 'react-icons/pi';

function RemovecartProduct({ removeFromCart }: { removeFromCart: () => void }) {
  return (
    <button className='outline-none' onClick={() => removeFromCart()}>
      <PiTrashLight className='text-xl' />
    </button>
  );
}

export default RemovecartProduct;

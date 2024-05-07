'use client';

import React from 'react';
import { PiTrashLight } from 'react-icons/pi';

type Props = {
  deleteProduct: () => void;
};

function DeleteProduct({ deleteProduct }: Props) {
  return (
    <button className='text-red-500' onClick={() => deleteProduct()}>
      <PiTrashLight />
    </button>
  );
}

export default DeleteProduct;

'use client';

function RemovecartProduct({ removeFromCart }: { removeFromCart: () => void }) {
  return (
    <button
      className='border border-black px-2 mx-5 z-100'
      onClick={() => removeFromCart()}>
      x
    </button>
  );
}

export default RemovecartProduct;

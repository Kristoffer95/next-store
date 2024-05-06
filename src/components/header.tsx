import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='container'>
      <div className='flex gap-2'>
        <Link className='border py-2 px-4' href='/'>
          Home
        </Link>
        <Link className='border py-2 px-4' href='/products'>
          Products
        </Link>
        <Link className='border py-2 px-4' href='/cart'>
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;

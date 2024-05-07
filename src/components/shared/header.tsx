import Link from 'next/link';
import React from 'react';
import { SideNavigation } from './side-navigation';

function Header() {
  return (
    <div className='flex gap-2 border-b border-black/20 py-3'>
      <div className='container'>
        <div className='flex justify-between'>
          <div className='flex'>
            <Link className='py-2 px-4' href='/'>
              Home
            </Link>
            <Link className='py-2 px-4' href='/products'>
              Products
            </Link>
            <Link className='py-2 px-4' href='/cart'>
              Cart
            </Link>
            <Link className='py-2 px-4' href='/random'>
              Random
            </Link>
          </div>

          <div>
            <SideNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

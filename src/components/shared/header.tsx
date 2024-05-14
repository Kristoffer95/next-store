import Link from 'next/link';
import React from 'react';
import CartSlider from './cart-slider';
import { TemporaryDropdown } from './temporary-dropdown';
import { Twitter } from 'lucide-react';

async function Header() {
  return (
    <div className='flex gap-2 border-b border-black/20 py-3'>
      <div className='container'>
        <div className='flex justify-between'>
          <div className='flex items-center justify-center w-square w-[40px]'>
            <Link href='/'>
              <Twitter size={32} />
            </Link>
          </div>

          <div className='flex text-sm items-center gap-7'>
            <Link
              className='uppercase tracking-wide font-semibold'
              href='/products'>
              Shop
            </Link>
            <Link className='uppercase tracking-wide font-semibold' href='/'>
              Other links
            </Link>
            <Link className='uppercase tracking-wide font-semibold' href='/'>
              Other links
            </Link>
          </div>

          <div className='flex items-center gap-5'>
            <TemporaryDropdown />

            <CartSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

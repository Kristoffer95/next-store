import Link from 'next/link';
import React from 'react';
import CartSlider from './cart-slider';
import { TemporaryDropdown } from './temporary-dropdown';
import { Twitter } from 'lucide-react';
import Image from 'next/image';

async function Header() {
  return (
    <div className='flex gap-2 border-b border-black/20 py-3'>
      <div className='container'>
        <div className='flex justify-between'>
          <div className='flex items-center justify-center w-[130px]'>
            <Link href='/' className='w-full'>
              <Image
                src={'/logo.png'}
                alt='logo'
                width={500}
                height={50}
                quality={100}
                className='w-full'
              />
            </Link>
          </div>

          <div className='flex text-sm items-center gap-7'>
            <Link
              className='uppercase tracking-wide font-semibold'
              href='/shop'>
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

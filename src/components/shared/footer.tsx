import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className=' pt-[100px]  mt-10'>
      <div className='container text-black'>
        {/* logo */}
        <div className='flex gap-[100px] py-10'>
          <div>
            <Image
              src={'/logo.png'}
              alt='logo'
              width={200}
              height={50}
              quality={100}
            />
          </div>

          <div>
            <ul className='flex flex-col gap-3'>
              {['about', 'contact'].map((route, index) => (
                <li key={index}>
                  <Link
                    className='uppercase hover:pl-2 transition-all duration-300'
                    href='/'>
                    {route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom bg-gray-300 py-4'>
        <div className='container'>
          {/* left section */}
          <div>
            <p className='text-black/70 text-xs'>
              © 2024 NEXT-STORE | ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

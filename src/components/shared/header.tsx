import Link from 'next/link';
import React from 'react';
import CartSlider from './cart-slider';
import Signout from './signout';
import { auth, signIn, signOut } from '@/auth';
import { Button } from '../ui/button';
import SigninGithub from './signin-github';
import { TemporaryDropdown } from './temporary-dropdown';

async function Header() {
  const session = await auth();

  return (
    <div className='flex gap-2 border-b border-black/20 py-3'>
      <div className='container'>
        <div className='flex justify-between'>
          <div className='flex'>
            <Link className='py-2 px-4' href='/'>
              Home
            </Link>
            <TemporaryDropdown />
          </div>

          <div className='flex items-center gap-3'>
            {!session ? (
              <>
                <Link href={'/auth'}>
                  <Button>Login / Register</Button>
                </Link>
                <SigninGithub
                  signIn={async () => {
                    'use server';
                    await signIn('github', {
                      redirectTo: '/profile',
                    });
                  }}
                />
              </>
            ) : (
              <Signout
                signOut={async () => {
                  'use server';
                  await signOut({
                    redirectTo: '/',
                  });
                }}
              />
            )}

            <CartSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

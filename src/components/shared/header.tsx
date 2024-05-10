import Link from 'next/link';
import React from 'react';
import { SideNavigation } from './side-navigation';
import Signout from './signout';
import { auth, signIn, signOut } from '@/auth';
import { Button } from '../ui/button';
import SigninGithub from './signin-github';

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
            <Link className='py-2 px-4' href='/products'>
              Products
            </Link>
            <Link className='py-2 px-4' href='/create-product'>
              Create Product
            </Link>
            <Link className='py-2 px-4' href='/profile'>
              Profile
            </Link>
            <Link href={'/auth'}>
              <Button>Auth Page</Button>
            </Link>
            {/* <Link className='py-2 px-4' href='/random'>
              Random
            </Link> */}
          </div>

          <div className='flex items-center gap-3'>
            {!session ? (
              <>
                <Link href={'/auth'}>
                  <Button>Auth Page</Button>
                </Link>
                <Link href={'/api/auth/signin'}>
                  <Button>Sign In</Button>
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

            <SideNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

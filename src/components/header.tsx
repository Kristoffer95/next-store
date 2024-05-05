import Link from 'next/link';
import LogoutButton from './logout-button';

import { signOut } from '@/auth';

function Header() {
  return (
    <div>
      <div className='m-4 flex gap-6 items-center'>
        <Link href='/' className='px-4 py-2 border rounded'>
          Home
        </Link>
        <Link href='/profile' className='px-4 py-2 border rounded'>
          Profile
        </Link>
        <LogoutButton
          signOut={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        />
        <Link
          href='/api/auth/signin?callbackUrl=/profile'
          className='px-4 py-2 border rounded'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;

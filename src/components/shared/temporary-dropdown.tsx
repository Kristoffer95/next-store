import { User, CircleEllipsis, LogOut, LogIn } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Signout from './signout';
import { auth, signIn, signOut } from '@/auth';
import SigninGithub from './signin-github';

export async function TemporaryDropdown() {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='outline-none'>
          <CircleEllipsis className='h-6 w-6' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {session && (
            <>
              <Link href='/profile'>
                <DropdownMenuItem>
                  <User className='mr-2 h-4 w-4' />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
            </>
          )}
          {session ? (
            <DropdownMenuItem>
              <LogOut className='mr-2 h-4 w-4' />
              <Signout
                signOut={async () => {
                  'use server';
                  await signOut({
                    redirectTo: '/',
                  });
                }}
              />
            </DropdownMenuItem>
          ) : (
            <>
              <Link href='/auth'>
                <DropdownMenuItem>
                  <LogIn className='mr-2 h-4 w-4' />
                  <span>Login / Register</span>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem>
                <LogIn className='mr-2 h-4 w-4' />
                <SigninGithub
                  signIn={async () => {
                    'use server';
                    await signIn('github', {
                      redirectTo: '/profile',
                    });
                  }}
                />
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { auth } from './auth';

import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = ['/profile'];
  const session = await auth();

  // Protected Routes - Authenticated
  if (path.includes(req.nextUrl.pathname) && !session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Protected Routes - Unauthenticated
  if (req.nextUrl.pathname === '/auth' && session) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }

  // const res = NextResponse.next();
  // res.cookies.set('testCookie', '123');

  // // console.log('result', result);

  // return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

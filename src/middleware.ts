import { auth } from './auth';

import { NextRequest } from 'next/server';

// export default auth((req) => {
//   console.log('ROUTE: ', req.nextUrl.pathname);
// });

// export const config = {
//   matcher: ['/login'],
// };

export function middleware(req: NextRequest) {
  const protectedRoutes = ['/login'];

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    // console.log('ROUTE: ', req.nextUrl.pathname);
    console.log('Protected Route');
  }
}

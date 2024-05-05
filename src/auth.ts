import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import { db } from './db';

// providers
import github from 'next-auth/providers/github';

export const authConfig = {
  adapter: DrizzleAdapter(db),
  providers: [github],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },

    /*
     * NOTE: Not used as it currently causes an error. (next-auth@beta v5)
     */

    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   const paths = ['/profile'];
    //   const isProtected = paths.some((path) =>
    //     nextUrl.pathname.startsWith(path)
    //   );

    //   if (isProtected && !isLoggedIn) {
    //     const redirectUrl = new URL('api/auth/signin', nextUrl.origin);
    //     redirectUrl.searchParams.append('callbackUrl', nextUrl.href);

    //     return Response.redirect(redirectUrl);
    //   }

    //   return true;
    // },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);

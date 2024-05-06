import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth, { User, type NextAuthConfig } from 'next-auth';
import { db } from './db';

// providers
import github from 'next-auth/providers/github';
import credentials from 'next-auth/providers/credentials';
import { eq } from 'drizzle-orm';
import { decode, encode } from 'next-auth/jwt';

// export const authConfig =  satisfies NextAuthConfig;

interface AppUser extends User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    github,
    credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        // password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const {
          email,
          // password
        } = credentials || {};

        if (!email) {
          return null;
        }

        // Example authentication logic - adjust to your application's needs
        if (email === 'test@example.com') {
          const user: AppUser = {
            id: '1',
            name: 'Test User',
            email: 'test@example.com',
            emailVerified: null,
            image: null,
          };
          return user;
        }

        try {
          // Correct query usage with `eq` function
          const users = await db.query.users.findMany({
            // @ts-ignore
            where: (user) => eq(user.email, email),
          });

          const user = users[0];

          if (!user) return null;

          // @ts-ignore
          // await db.insert(sessions).values({
          //   userId: user.id,
          // });

          const authenticatedUser: AppUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            emailVerified: user.emailVerified,
            image: user.image,
          };

          console.log(authenticatedUser);

          return authenticatedUser;
        } catch (error) {
          throw new Error('Error fetching user' + error);
        }
      },
      // : async(credentials) => {
      //   const user = { id: 1, name: 'Test User' };
      //   return user;
      // },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      console.log('this is the session', session);

      session.user.id = user.id;
      return session;
    },

    /*
     * NOTE: Not used as it currently causes an error. (next-auth@beta v5)
     */

    // authorize({ auth, request: { nextUrl } }) {
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
});

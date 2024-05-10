import NextAuth, { type NextAuthConfig } from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { Provider } from 'next-auth/providers';

// providers
import Github from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

const providers: Provider[] = [
  Github,
  Credentials({
    credentials: { password: { label: 'Password', type: 'password' } },
    authorize: async (creds) => {
      let user = null;

      if (creds.password !== 'pass') return null;

      try {
        user = await prisma.user.findUnique({
          where: {
            email: 'test@test.com',
          },
        });

        if (!user) {
          throw new Error('User not found.');
        }
      } catch (error) {
        throw new Error('User not found.');
      }

      return user;
    },
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers,
  callbacks: {
    authorized({ request, auth }) {
      return true;
    },
    // session data
    async session({ session, token }) {
      const userId = token.sub as string;
      session.user.id = userId;
      return session;
    },
    // jwt data (can transform the jwt here)
    async jwt({ token, user }) {
      return token;

      // example: add isAdmin to the token
      // return {
      //   isAdmin: true
      //   ...token,
      // };
    },
  },
});

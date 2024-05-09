import NextAuth, { type NextAuthConfig } from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

// providers
import Github from 'next-auth/providers/github';
// import Credentials from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  // session: {
  //   strategy: 'jwt',
  // },
  providers: [
    Github,
    // Credentials({
    //   credentials: { password: { label: 'Password', type: 'password' } },
    //   async authorize(credentials) {
    //     if (credentials.password !== 'password') return null;

    //     const user = {
    //       id: '1',
    //       name: 'Fill Murray',
    //       email: 'bill@fillmurray.com',
    //       image: 'https://source.boringavatars.com/marble/120',
    //     };

    //     console.log(user);

    //     return user;
    //   },
    // }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      // const { pathname } = request.nextUrl
      // if (pathname === "/middleware-example") return !!auth
      return true;
    },
    async session({ session, user }) {
      // console.log('session', session);
      // console.log('user', user);
      session.user.id = user.id;
      return session;
    },
    // jwt({ token, trigger, session }) {
    //   if (trigger === 'update') token.name = session?.user?.name;
    //   return token;
    // },
  },
});

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     // Github({
//     //   clientId: process.env.AUTH_GITHUB_ID,
//     //   clientSecret: process.env.AUTH_GITHUB_SECRET,
//     // }),
//     // Github,
//     Credentials({
//       name: 'Sign in',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'email',
//           placeholder: 'test@test/cp,',
//         },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         const getUser = async (): Promise<User> =>
//           new Promise((resolve) =>
//             resolve({
//               id: '1',
//               name: 'name',
//               email: 'test@test.com',
//               emailVerified: null,
//               image: 'image_link...',
//               createdAt: new Date('2024-05-09T08:07:59.598Z'),
//               updatedAt: new Date('2024-05-09T08:07:59.598Z'),
//             })
//           );

//         const user = await getUser();

//         return user;
//       },
//     }),
//   ],
// } satisfies NextAuthConfig;

// export const handler = NextAuth(authOptions);

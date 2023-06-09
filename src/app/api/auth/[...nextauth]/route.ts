import { IUser, addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: 'auth/signin',
  },
  callbacks: {
    // @ts-ignore
    async signIn({ user: { name, email, image }, expires }) {
      addUser({
        name: name || '',
        email: email || '',
        image: image || '',
        posts: [],
      });
      return true;
    },
    // @ts-ignore
    async session({ session }) {
      // const {name, email, image } = session.user

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

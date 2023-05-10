import { addUser } from '@/service/user';
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
      console.log({ name, email, image });
      addUser({
        username: name || '',
        email: email || '',
        name: name || '',
        image: image || '',
      });
      return true;
    },
    // @ts-ignore
    async session({ session }) {
      // const {name, email, image } = session.user
      const user = session?.user || {};
      const expires = session?.expires || {};

      const modifiedSession = {
        user: { ...user, username: user.email?.split('@') || '' },
        expires,
      };
      return modifiedSession;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

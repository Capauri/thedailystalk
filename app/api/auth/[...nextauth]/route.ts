// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0",
    }),
  ],
  pages: {
    signIn: '/login',  // Custom sign-in page
    error: '/api/auth/error', // Error page
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string; // Type assertion
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Specify where to redirect after login
      return `${baseUrl}/dashboard`; // Change this to your desired route
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

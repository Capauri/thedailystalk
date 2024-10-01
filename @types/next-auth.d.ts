// @types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Add your custom property here
  }

  interface Token {
    accessToken?: string; // Ensure Token also has accessToken
  }
}

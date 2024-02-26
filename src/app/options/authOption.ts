import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const authOption = {
  adapter: PrismaAdapter(prisma),
  debug: false,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const userData = await prisma.user.findUnique({
        where:{id: user.id }
      })
      if (session && session.user){
        session.user.introduction = userData?.introduction
        session.user.id = userData?.id
      }
      return session
    }
  }
} satisfies NextAuthOptions;

import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { OAuth2Client } from 'google-auth-library';
import prisma from "@/app/libs/prismadb";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Invalid Credentials!");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid Credentials!");
        }

        const isCorrectPassword = await bcrypt.compare(
          password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect Password!");
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  callbacks:{
    async signIn({ account, profile }) {
      console.log(account,"account")
      console.log(profile,"profile")
      if (account.provider === "google") {
        
        return profile.email_verified && profile.email.endsWith("@gmail.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },

  debug: process.env.NODE_ENV !== "production",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

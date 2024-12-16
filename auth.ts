import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";

const providers = [
  Resend({
    // If your environment variable is named differently than default
    apiKey: process.env.AUTH_RESEND_KEY,
    from: "no-reply@resend.dev",
  }),
  Google,
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers,
  //   pages: {
  //     // signIn: "/login",
  //   },
});

export const providerMap = providers
  .map((provider: any) => {
    if (typeof provider === "function") {
      const providerData: any = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider: any) => provider.id !== "resend");

import NextAuth from "next-auth";
import {authOption} from "@/app/options/authOption";

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
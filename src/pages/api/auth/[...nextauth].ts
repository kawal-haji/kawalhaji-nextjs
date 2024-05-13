import { apiClient } from "@/apis/api-client";
import { Alert } from "@/types/alert";
import { LoginResponse } from "@/types/auth/LoginResponse";
import { AxiosError, AxiosResponse } from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface LoginArgs {
  email: string;
  password: string;
}

/**
 * Authentication configuration for NextAuth using ERKAM for retrieving JWT
 * @date 9/13/2022 - 1:56:34 PM
 *
 * @type {NextAuthOptions}
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const args: LoginArgs = {
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        };

        try {
          const loginResponse: AxiosResponse<LoginResponse> =
            await apiClient.post(
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
              { ...args }
            );

          return {
            id: `${loginResponse.data.id}`,
          };
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data.alert) {
            const errorData: Alert = error.response.data.alert;

            if (errorData.message?.toLowerCase().includes("wrong password")) {
              errorData.message = "Password salah, silakan coba lagi";
            }

            if (errorData.message?.toLowerCase().includes("not found")) {
              errorData.message = "Akun tidak ditemukan, silakan coba lagi";
            }

            throw new Error(
              JSON.stringify({ error: errorData, status: false, ok: false })
            );
          }

          const errorData: Alert = {
            message: (error as Error).message,
          };

          throw new Error(
            JSON.stringify({ error: errorData, status: false, ok: false })
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    // error: '/login',
    // signOut: '/user/logout',
  },
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }) {
      return { ...session, ...token };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

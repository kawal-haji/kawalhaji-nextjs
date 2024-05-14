import { apiClient } from "@/apis/api-client";
import { Response } from "@/types/Response";
import { Alert } from "@/types/alert";
import { LoginResponse, LoginResponseNextAuth } from "@/types/auth";
import axios, { AxiosError } from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const loginAsGuest = async () => {
  return await apiClient.post<Response<LoginResponse>>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/anon/sessions`
  );
};

const loginAsGoogle = async (code: string) => {
  const getUserGuest = await loginAsGuest();
  const token = getUserGuest.data.data?.session?.token ?? "";

  const getToken = await axios.post("https://oauth2.googleapis.com/token", {
    code: code,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback/google`,
    grant_type: "authorization_code",
  });

  const getSession = await axios.post<Response<LoginResponse>>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/sessions`,
    {
      notification: {
        channel: 0,
        token: "",
      },
      googleSignIn: {
        jwt: getToken.data.id_token,
      },
    },
    {
      // auth: {
      //   username: process.env.NEXT_PUBLIC_API_CLIENT_ID ?? "",
      //   password: process.env.NEXT_PUBLIC_API_CLIENT_SECRET ?? "",
      // },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return getSession;
};

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
        loginAs: {},
        code: {},
      },
      async authorize(credentials) {
        try {
          const loginResponse =
            credentials?.loginAs == "guest"
              ? await loginAsGuest()
              : await loginAsGoogle(credentials?.code ?? "");

          const token =
            loginResponse.data.data?.session?.token ??
            loginResponse.data.data?.accessSession?.token ??
            "";

          return {
            id: token,
            token: token,
          } as LoginResponseNextAuth;
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

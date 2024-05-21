import { Response } from "@/types/Response";
import { Alert } from "@/types/alert";
import {
  LoginResponse,
  LoginResponseNextAuth,
  LoginType,
  UpdateUserData,
} from "@/types/auth";
import axios, { AxiosError } from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const loginAsGuest = async () => {
  const result = await axios.post<Response<LoginResponse>>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/anon/sessions`,
    {},
    {
      auth: {
        username: process.env.API_CLIENT_ID ?? "",
        password: process.env.API_CLIENT_SECRET ?? "",
      },
    }
  );

  return result.data.data;
};

const loginAsGoogle = async (code: string) => {
  const getUserGuest = await loginAsGuest();
  const token = getUserGuest?.session?.token ?? "";

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

  return getSession.data.data;
};

const updateUserData = (data: string) => {
  return JSON.parse(data) as UpdateUserData;
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
        data: {},
      },
      async authorize(credentials) {
        try {
          let loginResponse: LoginResponse | undefined;

          switch (credentials?.loginAs as LoginType) {
            case LoginType.Guest:
              loginResponse = await loginAsGuest();
              break;

            case LoginType.Google:
              loginResponse = await loginAsGoogle(credentials?.code ?? "");
              break;

            case LoginType.VerifyPasspor:
              const result = await updateUserData(credentials?.data ?? "");
              loginResponse = {
                user: result.user,
                session: {
                  token: result.token,
                  expiredAt: result.expiredAt,
                },
              };
              break;

            default:
              break;
          }

          if (!loginResponse) {
            throw new Error(
              JSON.stringify({
                error: { message: "Login failed", status: false, ok: false },
              })
            );
          }

          const token =
            loginResponse.session?.token ??
            loginResponse.accessSession?.token ??
            "";

          return {
            id: token,
            token: token,
            expiredAt: loginResponse.session?.expiredAt ?? "",
            user: loginResponse.user,
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

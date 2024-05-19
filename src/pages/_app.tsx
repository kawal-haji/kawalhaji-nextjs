import AuthWrapper from "@/lib/AuthWrapper";
import Toast from "@/lib/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { setDefaultOptions } from "date-fns";
import { id as idLocaleDate } from "date-fns/locale";
import { Provider as JotaiProvider } from "jotai";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import "./globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const AppHead = () => {
  return (
    <Head>
      <meta name="google" content="notranslate" />
      <link rel="shortcut icon" href="/favicon/favicon.svg" />
      <link rel="icon" href="/favicon/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
    </Head>
  );
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  setDefaultOptions({ locale: idLocaleDate });

  const queryClient = new QueryClient();

  return (
    <>
      <AppHead />
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <JotaiProvider>
            <AuthWrapper>
              <Toast>
                {getLayout(<Component {...pageProps} />)}
                <ReactQueryDevtools initialIsOpen={false} />
              </Toast>
            </AuthWrapper>
          </JotaiProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}

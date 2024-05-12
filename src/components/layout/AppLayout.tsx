import Head from "next/head";
import * as React from "react";

export interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, pageTitle }) => {
  const pageTitleFormatted = pageTitle
    ? `${pageTitle} | Kawal Haji`
    : "Kawal Haji";

  return (
    <>
      <Head>
        <title>{pageTitleFormatted}</title>
      </Head>

      <main>{children}</main>
    </>
  );
};

export default AppLayout;

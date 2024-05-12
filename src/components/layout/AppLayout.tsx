import Head from "next/head";
import * as React from "react";

export interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  pageTitle = "Kawal Haji",
}) => {
  const pageTitleFormatted = pageTitle
    ? `${pageTitle} | Kawal Haji`
    : pageTitle;

  return (
    <main>
      <Head>
        <title>{pageTitleFormatted}</title>
      </Head>
      <main>{children}</main>
    </main>
  );
};

export default AppLayout;

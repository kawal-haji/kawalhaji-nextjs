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

      <div className="h-fit w-full flex bg-gray-100">
        <main className="max-w-xl mx-auto bg-spot-pallate w-full h-screen">
          {children}
        </main>
      </div>
    </>
  );
};

export default AppLayout;

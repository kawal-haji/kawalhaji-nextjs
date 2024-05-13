import NavBar from "@/components/layout/components/NavBar";
import Head from "next/head";
import * as React from "react";

export interface AuthAppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  showNavBar?: boolean;
}

const AuthAppLayout: React.FC<AuthAppLayoutProps> = ({
  children,
  pageTitle,
  showNavBar,
}) => {
  const pageTitleFormatted = pageTitle
    ? `${pageTitle} | Kawal Haji`
    : "Kawal Haji";

  return (
    <>
      <Head>
        <title>{pageTitleFormatted}</title>
      </Head>

      <main>
        <div className="w-full h-screen bg-spot-pallate">{children}</div>
        {(showNavBar === true || showNavBar === undefined) && <NavBar />}
      </main>
    </>
  );
};

export default AuthAppLayout;

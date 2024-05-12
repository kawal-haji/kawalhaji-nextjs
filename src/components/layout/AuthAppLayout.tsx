import NavBar from "@/components/layout/components/NavBar";
import Head from "next/head";
import * as React from "react";

export interface AuthAppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const AuthAppLayout: React.FC<AuthAppLayoutProps> = ({
  children,
  pageTitle,
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
        <div className="w-full h-[calc(100vh-80px)] bg-spot-pallate">
          {children}
        </div>
        <NavBar />
      </main>
    </>
  );
};

export default AuthAppLayout;

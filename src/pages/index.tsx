import LandingPageMain from "@/components/landing_page/LandingPageMain";
import AppLayout from "@/components/layout/AppLayout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/menu/beranda",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const LandingPage: NextPageWithLayout = () => {
  return <LandingPageMain />;
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default LandingPage;

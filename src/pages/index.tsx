import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import AppLayout from "@/components/layout/AppLayout";
import LandingPageMain from "@/components/landing_page/LandingPageMain";

const LandingPage: NextPageWithLayout = () => {
  return <LandingPageMain />;
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default LandingPage;

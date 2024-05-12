import BerandaMain from "@/components/beranda/BerandaMain";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const LandingPage: NextPageWithLayout = () => {
  return <BerandaMain />;
};

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthAppLayout>{page}</AuthAppLayout>;
};

export default LandingPage;

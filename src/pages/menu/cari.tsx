import CariMain from "@/components/cari/CariMain";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const CariPage: NextPageWithLayout = () => {
  return <CariMain />;
};

CariPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthAppLayout>{page}</AuthAppLayout>;
};

export default CariPage;

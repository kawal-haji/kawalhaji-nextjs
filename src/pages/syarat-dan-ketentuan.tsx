import AuthAppLayout from "@/components/layout/AuthAppLayout";
import SyaratKetentuanMain from "@/components/syarat_ketentuan/SyaratKetentuanMain";
import { NextPageWithLayout } from "@/pages/_app";
import type { ReactElement } from "react";

const SyaratKetentuanPage: NextPageWithLayout = () => {
  return <SyaratKetentuanMain />;
};

SyaratKetentuanPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Syarat dan Ketentuan" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default SyaratKetentuanPage;

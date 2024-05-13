import BuatLaporanMain from "@/components/buat_laporan/BuatLaporanMain";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const BerandaPage: NextPageWithLayout = () => {
  return <BuatLaporanMain />;
};

BerandaPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Buat Laporan" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default BerandaPage;

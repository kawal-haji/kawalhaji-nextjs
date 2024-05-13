import BuatLaporanMain from "@/components/buat_laporan/BuatLaporanMain";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const BuatLaporanPage: NextPageWithLayout = () => {
  return <BuatLaporanMain />;
};

BuatLaporanPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Buat Laporan" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default BuatLaporanPage;

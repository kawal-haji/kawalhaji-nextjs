import LaporanDetail from "@/components/laporan/LaporanDetail";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import type { ReactElement } from "react";

const BuatLaporanPage: NextPageWithLayout = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <LaporanDetail id={Number(id)} />;
};

BuatLaporanPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Detail Laporan" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default BuatLaporanPage;

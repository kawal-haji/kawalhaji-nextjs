import LaporanDetail from "@/components/laporan/LaporanDetail";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import type { ReactElement } from "react";

const BuatLaporanPage: NextPageWithLayout = () => {
  const router = useRouter();
  const xid = router.query.xid as string;

  return <LaporanDetail xid={xid} />;
};

BuatLaporanPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Detail Laporan" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default BuatLaporanPage;

import AuthAppLayout from "@/components/layout/AuthAppLayout";
import RiwayatMain from "@/components/riwayat/RiwayatMain";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const RiwayatPage: NextPageWithLayout = () => {
  return <RiwayatMain />;
};

RiwayatPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthAppLayout pageTitle="Cari Laporan">{page}</AuthAppLayout>;
};

export default RiwayatPage;

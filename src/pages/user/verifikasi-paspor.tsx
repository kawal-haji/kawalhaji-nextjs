import AuthAppLayout from "@/components/layout/AuthAppLayout";
import VerifikasiPasporMain from "@/components/verifikasi_paspor/VerifikasiPasporMain";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const VerifikasiPasporPage: NextPageWithLayout = () => {
  return <VerifikasiPasporMain />;
};

VerifikasiPasporPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Verifikasi Passpor" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default VerifikasiPasporPage;

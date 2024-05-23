import KebijakanPrivasiMain from "@/components/kebijakan_privasi/KebijakanPrivasiMain";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import { NextPageWithLayout } from "@/pages/_app";
import type { ReactElement } from "react";

const KebijakanPrivasiPage: NextPageWithLayout = () => {
  return <KebijakanPrivasiMain />;
};

KebijakanPrivasiPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Kebijakan Privasi" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default KebijakanPrivasiPage;

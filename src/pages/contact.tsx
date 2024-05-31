import KontakMain from "@/components/kontak/KontakMain";
import AuthAppLayout from "@/components/layout/AuthAppLayout";
import { NextPageWithLayout } from "@/pages/_app";
import type { ReactElement } from "react";

const KontakPage: NextPageWithLayout = () => {
  return <KontakMain />;
};

KontakPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthAppLayout pageTitle="Narahubung" showNavBar={false}>
      {page}
    </AuthAppLayout>
  );
};

export default KontakPage;

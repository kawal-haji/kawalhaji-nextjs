import AuthAppLayout from "@/components/layout/AuthAppLayout";
import ProfilMain from "@/components/profil/ProfilMain";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const ProfilPage: NextPageWithLayout = () => {
  return <ProfilMain />;
};

ProfilPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthAppLayout pageTitle="Profil">{page}</AuthAppLayout>;
};

export default ProfilPage;

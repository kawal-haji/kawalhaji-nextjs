import FormVerifikasiPaspor from "@/components/verifikasi_paspor/components/FormVerifikasiPaspor";
import Konfirmasi from "@/components/verifikasi_paspor/components/Konfirmasi";
import { Jamaah } from "@/types/jamaah";
import * as React from "react";

export interface VerifikasiPasporMainProps {}

const VerifikasiPasporMain: React.FC<VerifikasiPasporMainProps> = ({}) => {
  const [jamaah, setJamaah] = React.useState<Jamaah>();

  if (!!jamaah) {
    return <Konfirmasi jamaah={jamaah} setJamah={setJamaah} />;
  }

  return <FormVerifikasiPaspor setJamaah={setJamaah} />;
};

export default VerifikasiPasporMain;

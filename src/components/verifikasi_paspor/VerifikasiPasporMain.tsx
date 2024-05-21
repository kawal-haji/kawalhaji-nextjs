import { InquiryJamaahResponse } from "@/apis/user/getInquiryUserJamaah";
import FormVerifikasiPaspor from "@/components/verifikasi_paspor/components/FormVerifikasiPaspor";
import Konfirmasi from "@/components/verifikasi_paspor/components/Konfirmasi";
import * as React from "react";

export interface VerifikasiPasporMainProps {}

const VerifikasiPasporMain: React.FC<VerifikasiPasporMainProps> = ({}) => {
  const [inquiryJamaahResponse, setInquiryJamaahResponse] =
    React.useState<InquiryJamaahResponse>();

  if (!!inquiryJamaahResponse) {
    return (
      <Konfirmasi
        inquiryJamaahResponse={inquiryJamaahResponse}
        setInquiryJamaahResponse={setInquiryJamaahResponse}
      />
    );
  }

  return (
    <FormVerifikasiPaspor setInquiryJamaahResponse={setInquiryJamaahResponse} />
  );
};

export default VerifikasiPasporMain;

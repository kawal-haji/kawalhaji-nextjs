import { URL_SSO_GOOGLE } from "@/lib/constants";
import * as React from "react";

export interface BuatLaporanTamuProps {}

const BuatLaporanTamu: React.FC<BuatLaporanTamuProps> = ({}) => {
  return (
    <div className=" bg-spot-pallate h-screen">
      <div className="p-5 text-[12px]">
        Anda tidak dapat membuat laporan karena Anda sedang login sebagai tamu.
        Silakan klik{" "}
        <a href={URL_SSO_GOOGLE} className="italic font-bold text-blue-600">
          disini
        </a>{" "}
        untuk login.
      </div>
    </div>
  );
};

export default BuatLaporanTamu;

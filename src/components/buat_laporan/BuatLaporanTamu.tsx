import * as React from "react";

export interface BuatLaporanTamuProps {}

const BuatLaporanTamu: React.FC<BuatLaporanTamuProps> = ({}) => {
  return (
    <div className="p-5 text-[12px] bg-spot-pallate h-screen">
      Anda tidak dapat membuat laporan karena Anda sedang login sebagai tamu.
      Silakan login terlebih dahulu.
    </div>
  );
};

export default BuatLaporanTamu;

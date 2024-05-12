import * as React from "react";

export interface LaporanTidakAdaProps {}

const LaporanTidakAda: React.FC<LaporanTidakAdaProps> = ({}) => {
  return (
    <div className="p-[20px]">
      <img
        src="/icons/empty_reporting.svg"
        alt="empty"
        className="w-[100px] h-[100px] mx-auto"
      />
      <div className="text-center text-[16px] mt-[20px] font-semibold">
        Tidak ada laporan
      </div>
      <div className="text-center text-[14px] text-gray-500 mt-[12px]">
        Silakan membuat laporan jika Anda menemukan permasalahan!
      </div>
    </div>
  );
};

export default LaporanTidakAda;

import BuatLaporanForm from "@/components/buat_laporan/BuatLaporanForm";
import * as React from "react";

export interface BuatLaporanMainProps {}

const BuatLaporanMain: React.FC<BuatLaporanMainProps> = ({}) => {
  return (
    <div className="h-screen relative bg-white">
      <div className="flex items-center gap-4 border-b-2 border-b-gray-200 py-[18px] px-[16px]">
        <img src="/icons/arrow_left.svg" alt="back" height="24" />
        <div className="text-[17px] font-medium">Buat Laporan Baru</div>
      </div>
      <BuatLaporanForm />
    </div>
  );
};

export default BuatLaporanMain;

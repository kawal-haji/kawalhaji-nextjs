import LaporanSayaListDetail from "@/components/laporan_saya/LaporanSayaListDetail";
import * as React from "react";

export interface LaporanSayaListProps {}

const LaporanSayaList: React.FC<LaporanSayaListProps> = ({}) => {
  return (
    <>
      <div>
        <div className="mb-2">
          <div className="font-medium text-[14px]">Pantau Laporan Saya</div>
          <div className="text-[12px] text-gray-500">
            Laporan Anda yang saat ini aktif
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex items-center justify-start gap-2">
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
            <LaporanSayaListDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanSayaList;

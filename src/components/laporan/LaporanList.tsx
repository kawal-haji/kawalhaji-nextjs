import LaporanListDetail from "@/components/laporan/LaporanListDetail";
import LaporanTidakAda from "@/components/laporan/LaporanTidakAda";
import * as React from "react";

export interface LaporanListProps {}

const LaporanList: React.FC<LaporanListProps> = ({}) => {
  return (
    <>
      <div>
        <div className="mb-2">
          <div className="font-medium text-[14px]">Laporan Teratas</div>
          <div className="text-[12px] text-gray-500">
            Permasalahan yang populer
          </div>
        </div>
        <div className="pb-[32px] flex flex-col gap-2">
          <LaporanTidakAda />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
        </div>
      </div>
    </>
  );
};

export default LaporanList;

import LaporanList from "@/components/laporan/LaporanList";
import RiwayatTidakAda from "@/components/riwayat/RiwayatTidakAda";
import * as React from "react";

export interface RiwayatMainProps {}

const RiwayatMain: React.FC<RiwayatMainProps> = ({}) => {
  return (
    <div className="h-screen relative">
      <div className="bg-white">
        <div className="px-[16px] py-[18px] text-[17px] font-medium">
          Riwayat
        </div>
        <div role="tablist" className="tabs tabs-bordered overflow-x-auto">
          <a role="tab" className="tab h-[44px] tab-active ">
            <div className="flex items-center gap-2 p-[8px]">
              <div className="text-primary truncate">Semua Laporan</div>
            </div>
          </a>
          <a role="tab" className="tab h-[44px]">
            <div className="flex items-center gap-2 p-[8px]">
              <div className="text-[#999999] truncate">Laporan Aktif</div>
            </div>
          </a>
          <a role="tab" className="tab h-[44px]">
            <div className="flex items-center gap-2 p-[8px]">
              <div className="text-[#999999] truncate">Laporan Ditutup</div>
            </div>
          </a>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        <div className="pb-[32px]">
          <div className="py-[12px]">
            <RiwayatTidakAda />
            <LaporanList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatMain;

import { PaginationReportFilter } from "@/apis/user_report/getListUserReport";
import LaporanList from "@/components/laporan/LaporanList";
import RiwayatMenu from "@/components/riwayat/RiwayatMenu";
import RiwayatTidakAda from "@/components/riwayat/RiwayatTidakAda";
import * as React from "react";

export interface RiwayatMainProps {}

const RiwayatMain: React.FC<RiwayatMainProps> = ({}) => {
  const [filter, setFilter] = React.useState<PaginationReportFilter>({
    categoryId: "",
    title: "",
    statusId: "",
    isOwned: true,
  });

  return (
    <div className="h-screen relative">
      <div className="bg-white">
        <div className="px-[16px] py-[18px] text-[17px] font-medium">
          Riwayat
        </div>
        <RiwayatMenu filter={filter} setFilter={setFilter} />
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        <div className="pb-[32px]">
          <div className="py-[12px]">
            <LaporanList filter={filter} noReportJsx={<RiwayatTidakAda />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatMain;

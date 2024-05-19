import {
  PaginationReportFilter,
  SortByUserReport,
} from "@/apis/user_report/getListUserReport";
import CariMenu from "@/components/cari/CariMenu";
import CariSortBy from "@/components/cari/CariSortBy";
import CariTidakAdaHasil from "@/components/cari/CariTidakAdaHasil";
import CariTitle from "@/components/cari/CariTitle";
import LaporanList from "@/components/laporan/LaporanList";
import * as React from "react";

export interface CariMainProps {}

const CariMain: React.FC<CariMainProps> = ({}) => {
  const [sortBy, setSortBy] = React.useState<SortByUserReport>(
    SortByUserReport.LATEST
  );
  const [filter, setFilter] = React.useState<PaginationReportFilter>({
    categoryId: "",
    title: "",
    statusId: "",
    isOwned: false,
  });

  return (
    <>
      <div className="h-screen relative">
        <div className="bg-white">
          <div className=" px-[16px] py-[8px]">
            <div className="flex items-center gap-4">
              <div className="w-full">
                <CariTitle filter={filter} setFilter={setFilter} />
              </div>
              <CariSortBy sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>

          <CariMenu filter={filter} setFilter={setFilter} />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          <div className="pt-4">
            <LaporanList
              filter={filter}
              sortBy={sortBy}
              noReportJsx={<CariTidakAdaHasil />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CariMain;

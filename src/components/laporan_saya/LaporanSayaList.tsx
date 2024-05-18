import {
  PaginationReportQueryParams,
  SortByUserReport,
} from "@/apis/user_report/getListUserReport";
import LaporanSayaListDetail from "@/components/laporan_saya/LaporanSayaListDetail";
import { useListUserReport } from "@/hooks/user_report/useListUserReport";
import { ReportStatusEnum } from "@/types/report/report";
import * as React from "react";

export interface LaporanSayaListProps {}

export const initiatePaginationReportFilter: PaginationReportQueryParams = {
  limit: 10,
  skip: 0,
  sortBy: SortByUserReport.LAST_UPDATED,
  filters: {
    categoryId: "",
    title: "",
    statusId: ReportStatusEnum.ACTIVE,
    isOwned: true,
  },
};

const LaporanSayaList: React.FC<LaporanSayaListProps> = ({}) => {
  const { listUserReport, isLoading, isLastUserReport, handleLoadMore } =
    useListUserReport(initiatePaginationReportFilter);

  if (!isLoading && listUserReport?.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mx-[16px]">
        <div className="mb-2">
          <div className="font-medium text-[14px]">Pantau Laporan Saya</div>
          <div className="text-[12px] text-gray-500">
            Laporan Anda yang saat ini aktif
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex items-center justify-start gap-2">
            {listUserReport?.map((report) => (
              <LaporanSayaListDetail report={report} key={report.xid} />
            ))}
            {!isLoading && !isLastUserReport && (
              <div className="flex justify-center p-5">
                <button
                  onClick={handleLoadMore}
                  className="btn bg-primary btn-sm text-white"
                >
                  Load More
                </button>
              </div>
            )}
            {isLoading && (
              <div className="flex justify-center p-5">
                <span className="loading loading-spinner"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanSayaList;

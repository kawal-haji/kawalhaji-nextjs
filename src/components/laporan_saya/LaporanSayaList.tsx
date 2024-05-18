import LaporanSayaListDetail from "@/components/laporan_saya/LaporanSayaListDetail";
import {
  initiatePaginationReportFilter,
  useListUserReport,
} from "@/hooks/user_report/useListUserReport";
import * as React from "react";

export interface LaporanSayaListProps {}

const LaporanSayaList: React.FC<LaporanSayaListProps> = ({}) => {
  const initiatePagination = initiatePaginationReportFilter;
  initiatePagination.filters.isOwned = "1";

  const { listUserReport, isLoading, isLastUserReport, handleLoadMore } =
    useListUserReport({
      ...initiatePaginationReportFilter,
    });

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

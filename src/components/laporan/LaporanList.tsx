import {
  PaginationReportQueryParams,
  SortByUserReport,
} from "@/apis/user_report/getListUserReport";
import LaporanListDetail from "@/components/laporan/LaporanListDetail";
import LaporanTidakAda from "@/components/laporan/LaporanTidakAda";
import { useListUserReport } from "@/hooks/user_report/useListUserReport";
import * as React from "react";

export interface LaporanListProps {
  title?: string;
  description?: string;
}

export const initiatePaginationReportFilter: PaginationReportQueryParams = {
  limit: 10,
  skip: 0,
  sortBy: SortByUserReport.LAST_UPDATED,
  filters: {
    categoryId: "",
    title: "",
    statusId: "",
    isOwned: false,
  },
};

const LaporanList: React.FC<LaporanListProps> = (props: LaporanListProps) => {
  const { listUserReport, isLoading, isLastUserReport, handleLoadMore } =
    useListUserReport(initiatePaginationReportFilter);

  return (
    <>
      <div className="mx-[16px]">
        {(props.title || props.description) && (
          <>
            <div className="mb-2">
              {props.title && (
                <div className="font-medium text-[14px]">{props.title}</div>
              )}
              {props.description && (
                <div className="text-[14px] text-gray-500">
                  {props.description}
                </div>
              )}
            </div>
          </>
        )}
        <div className="pb-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {listUserReport?.map((report) => (
            <LaporanListDetail report={report} key={report.xid} />
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
          {!isLoading && listUserReport?.length === 0 && <LaporanTidakAda />}
          {isLoading && (
            <div className="flex justify-center p-5">
              <span className="loading loading-spinner"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LaporanList;

import {
  PaginationReportFilter,
  PaginationReportQueryParams,
  SortByUserReport,
} from "@/apis/user_report/getListUserReport";
import LaporanListDetail from "@/components/laporan/LaporanListDetail";
import LaporanTidakAda from "@/components/laporan/LaporanTidakAda";
import { useListUserReport } from "@/hooks/user_report/useListUserReport";
import { ReportStatusEnum } from "@/types/report/report";
import * as React from "react";

export interface LaporanListProps {
  title?: string;
  description?: string;
  filter?: PaginationReportFilter | null;
  sortBy?: SortByUserReport | null;
  noReportJsx?: JSX.Element;
}

export const initiatePaginationReportFilter: PaginationReportQueryParams = {
  limit: 10,
  skip: 0,
  sortBy: SortByUserReport.LATEST,
  filters: {
    categoryId: "",
    title: "",
    statusId: ReportStatusEnum.ACTIVE,
    isOwned: false,
  },
};

const LaporanList: React.FC<LaporanListProps> = ({
  title,
  description,
  filter,
  sortBy,
  noReportJsx,
}: LaporanListProps) => {
  const {
    listUserReport,
    isLoading,
    isLastUserReport,
    handleLoadMore,
    handleChangeParameter,
  } = useListUserReport(initiatePaginationReportFilter);

  React.useEffect(() => {
    if (!!filter) {
      const temp = { ...initiatePaginationReportFilter };
      temp.filters = filter;
      temp.skip = 0;
      handleChangeParameter(temp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  React.useEffect(() => {
    if (!!sortBy) {
      const temp = { ...initiatePaginationReportFilter };
      if (!!filter) temp.filters = filter;
      temp.sortBy = sortBy;
      temp.skip = 0;
      handleChangeParameter(temp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  return (
    <>
      <div className="mx-[16px]">
        {(title || description) && (
          <>
            <div className="mb-2">
              {title && (
                <div className="font-medium text-[14px] md:text-[16px]">
                  {title}
                </div>
              )}
              {description && (
                <div className="text-[12px] text-gray-500">{description}</div>
              )}
            </div>
          </>
        )}
        <div className="pb-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {listUserReport?.map((report) => (
            <LaporanListDetail report={report} key={report.xid} />
          ))}
          {!isLoading && !isLastUserReport && (
            <div className="flex justify-center p-5">
              <button
                onClick={handleLoadMore}
                className="btn bg-primary btn-sm md:btn-md text-white"
              >
                Load More
              </button>
            </div>
          )}
          {!isLoading && listUserReport?.length === 0 && !noReportJsx && (
            <LaporanTidakAda />
          )}
          {!isLoading &&
            listUserReport?.length === 0 &&
            !!noReportJsx &&
            noReportJsx}
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

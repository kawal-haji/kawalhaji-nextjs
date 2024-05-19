import {
  PaginationReportQueryParams,
  SortByUserReport,
} from "@/apis/user_report/getListUserReport";
import LaporanListDetail from "@/components/laporan/LaporanListDetail";
import LaporanTidakAda from "@/components/laporan/LaporanTidakAda";
import { useListUserReport } from "@/hooks/user_report/useListUserReport";
import { ReportCategory } from "@/types/report/category";
import { ReportStatusEnum } from "@/types/report/report";
import * as React from "react";

export interface LaporanListProps {
  title?: string;
  description?: string;
  category?: ReportCategory | null;
}

export const initiatePaginationReportFilter: PaginationReportQueryParams = {
  limit: 10,
  skip: 0,
  sortBy: SortByUserReport.LAST_UPDATED,
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
  category,
}: LaporanListProps) => {
  const [parameters, setParameters] =
    React.useState<PaginationReportQueryParams>(initiatePaginationReportFilter);
  const { listUserReport, isLoading, isLastUserReport, handleLoadMore } =
    useListUserReport(initiatePaginationReportFilter);

  React.useEffect(() => {
    const temp = { ...parameters };
    temp.filters.categoryId = `${category?.id ?? ""}`;
    temp.skip = 0;
    setParameters(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <>
      <div className="mx-[16px]">
        {(title || description) && (
          <>
            <div className="mb-2">
              {title && <div className="font-medium text-[14px]">{title}</div>}
              {description && (
                <div className="text-[14px] text-gray-500">{description}</div>
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

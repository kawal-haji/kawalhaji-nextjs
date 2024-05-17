import { PaginationReportQueryParams } from "@/apis/user_report/getListUserReport";
import LaporanListDetail from "@/components/laporan/LaporanListDetail";
import LaporanTidakAda from "@/components/laporan/LaporanTidakAda";
import { useListUserReport } from "@/hooks/user_report/useListUserReport";
import { initialPaginationReportQueryParams } from "@/store/report/PaginationReportStore";
import * as React from "react";

export interface LaporanListProps {
  title?: string;
  description?: string;
}

const LaporanList: React.FC<LaporanListProps> = (props: LaporanListProps) => {
  const [filter, setFilter] = React.useState<PaginationReportQueryParams>(
    initialPaginationReportQueryParams
  );
  const { data: listUserReport, isPending: isLoading } =
    useListUserReport(filter);

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
            <LaporanListDetail key={report.xid} />
          ))}
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

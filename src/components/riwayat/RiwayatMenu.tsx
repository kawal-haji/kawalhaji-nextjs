import { PaginationReportFilter } from "@/apis/user_report/getListUserReport";
import { ReportStatusEnum } from "@/types/report/report";
import * as React from "react";

export interface RiwayatMenuProps {
  filter: PaginationReportFilter;
  setFilter: React.Dispatch<React.SetStateAction<PaginationReportFilter>>;
}

const RiwayatMenu: React.FC<RiwayatMenuProps> = ({ filter, setFilter }) => {
  const handleChangeMenu = (statusId: ReportStatusEnum | null) => {
    setFilter((prev) => {
      return {
        ...prev,
        statusId: statusId ?? "",
        isOwned: true,
      };
    });
  };

  return (
    <div role="tablist" className="tabs tabs-bordered overflow-x-auto">
      <a
        role="tab"
        className={`tab h-[44px] ${!!filter.statusId ? "" : "tab-active"} `}
        onClick={() => handleChangeMenu(null)}
      >
        <div className="flex items-center gap-2 p-[8px]">
          <div
            className={`${
              !!filter.statusId ? "text-[#999999]" : "text-primary"
            } truncate`}
          >
            Semua Laporan
          </div>
        </div>
      </a>
      <a
        role="tab"
        className={`tab h-[44px] ${
          filter.statusId === ReportStatusEnum.ACTIVE ? "tab-active" : ""
        } `}
        onClick={() => handleChangeMenu(ReportStatusEnum.ACTIVE)}
      >
        <div className="flex items-center gap-2 p-[8px]">
          <div
            className={`${
              filter.statusId === ReportStatusEnum.ACTIVE
                ? "text-primary"
                : "text-[#999999]"
            } truncate`}
          >
            Laporan Aktif
          </div>
        </div>
      </a>
      <a
        role="tab"
        className={`tab h-[44px] ${
          filter.statusId === ReportStatusEnum.CLOSED ? "tab-active" : ""
        } `}
        onClick={() => handleChangeMenu(ReportStatusEnum.CLOSED)}
      >
        <div
          className={`${
            filter.statusId === ReportStatusEnum.CLOSED
              ? "text-primary"
              : "text-[#999999]"
          } truncate`}
        >
          <div className="text-[#999999] truncate">Laporan Ditutup</div>
        </div>
      </a>
    </div>
  );
};

export default RiwayatMenu;

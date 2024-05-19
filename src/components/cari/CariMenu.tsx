import * as React from "react";

import { PaginationReportFilter } from "@/apis/user_report/getListUserReport";
import { ReportCategory, reportCategories } from "@/types/report/category";

export interface CariMenuProps {
  filter: PaginationReportFilter;
  setFilter: React.Dispatch<React.SetStateAction<PaginationReportFilter>>;
}

const CariMenu: React.FC<CariMenuProps> = ({ filter, setFilter }) => {
  const handleCategory = (category: ReportCategory | null) => {
    setFilter((prev) => {
      return {
        ...prev,
        categoryId: category?.id ?? "",
      };
    });
  };

  return (
    <div role="tablist" className="tabs tabs-bordered overflow-x-auto">
      <a
        role="tab"
        className={`tab h-[44px] ${!!filter?.categoryId ? "" : "tab-active"} `}
        onClick={() => handleCategory(null)}
      >
        <div className="flex items-center gap-2 px-[12px] py-[8px]">
          <img
            src="/icons/makkah_overlay.svg"
            alt="Semua"
            className="w-[24px] h-[24px]"
          />
          <div
            className={`${
              !!filter?.categoryId ? "text-primary" : "text-neutral-700"
            }`}
          >
            Semua
          </div>
        </div>
      </a>
      {reportCategories.map((reportCategory) => (
        <a
          key={reportCategory.id}
          role="tab"
          className={`tab h-[44px] ${
            filter?.categoryId === reportCategory.id ? "tab-active" : ""
          } `}
          onClick={() => handleCategory(reportCategory)}
        >
          <div className="flex items-center gap-2 px-[12px] py-[8px]">
            <img
              src={`/icons/${reportCategory.iconText}`}
              alt="Semua"
              className="w-[20px] h-[20px]"
            />
            <div
              className={`${
                filter?.categoryId === reportCategory.id
                  ? "text-neutral-700"
                  : "text-primary"
              } ${reportCategory.id === 4 ? "w-[100px]" : ""}`}
            >
              {reportCategory.name}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CariMenu;

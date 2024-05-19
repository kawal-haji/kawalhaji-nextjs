import { PaginationReportFilter } from "@/apis/user_report/getListUserReport";
import { ReportCategory, reportCategories } from "@/types/report/category";
import * as React from "react";

export interface BerandaMenuProps {
  filter: PaginationReportFilter;
  setFilter: React.Dispatch<React.SetStateAction<PaginationReportFilter>>;
}

const BerandaMenu: React.FC<BerandaMenuProps> = ({ filter, setFilter }) => {
  const handleCategory = (category: ReportCategory | null) => {
    setFilter((prev) => {
      return {
        ...prev,
        categoryId: category?.id ?? "",
      };
    });
  };

  return (
    <div className="mx-[16px] p-[8px] bg-white rounded-md mt-[10px]">
      <div className="font-medium text-[12px]">Telusuri Laporan</div>
      <div className="text-[10px] text-gray-500">
        Telusuri laporan berdasarkan kategori berikut
      </div>
      <div className="flex items-center justify-between overflow-x-auto mt-2">
        <div
          className={`flex flex-col items-center justify-center gap-1 h-[56px] w-[56px] ${
            !!filter?.categoryId ? "" : "bg-primary text-white rounded-md"
          }`}
          onClick={() => handleCategory(null)}
        >
          <img
            src="/icons/beranda/all_reporting_menu.svg"
            alt="Semua Laporan"
            className="w-[24px] h-[24px]"
          />
          <div
            className={`text-[9px] ${
              !!filter?.categoryId ? "" : "font-medium"
            }`}
          >
            Semua
          </div>
        </div>
        {reportCategories.map((reportCategory) => (
          <div
            key={reportCategory.id}
            className={`flex flex-col items-center justify-center gap-1 h-[56px] w-[56px] ${
              filter?.categoryId === reportCategory.id
                ? "bg-primary text-white rounded-md"
                : ""
            }`}
            onClick={() => handleCategory(reportCategory)}
          >
            <img
              src={`/icons/beranda/${reportCategory.iconText}`}
              alt={reportCategory.name}
              className="w-[24px] h-[24px]"
            />
            <div
              className={`text-[9px] ${
                filter?.categoryId === reportCategory.id ? "font-medium" : ""
              }`}
            >
              {reportCategory.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BerandaMenu;

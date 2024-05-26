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
    <div className="mx-[16px] p-[8px] md:px-[24px] md:py-[16px] bg-white rounded-md mt-[10px]">
      <div className="md:flex items-center gap-8">
        <div className="md:mr-auto">
          <div className="font-medium text-[12px] md:text-[16px]">
            Telusuri Laporan
          </div>
          <div className="text-[10px] md:text-[12px] text-gray-500">
            Telusuri laporan berdasarkan kategori berikut
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-around overflow-x-auto mt-2 md:mt-0 md:gap-4">
          <div
            className={`flex flex-col items-center justify-center gap-1 h-[56px] w-[56px] md:h-auto md:w-auto md:px-[20px] md:py-[8px] cursor-pointer ${
              !!filter?.categoryId ? "" : "bg-primary text-white rounded-md"
            }`}
            onClick={() => handleCategory(null)}
          >
            <img
              src="/icons/beranda/all_reporting_menu.svg"
              alt="Semua Laporan"
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
            />
            <div
              className={`text-[9px] md:text-[12px] ${
                !!filter?.categoryId ? "" : "font-medium"
              }`}
            >
              Semua
            </div>
          </div>
          {reportCategories.map((reportCategory) => (
            <div
              key={reportCategory.id}
              className={`flex flex-col items-center justify-center gap-1 h-[56px] w-[56px] md:h-auto md:w-auto md:px-[20px] md:py-[8px] cursor-pointer ${
                filter?.categoryId === reportCategory.id
                  ? "bg-primary text-white rounded-md"
                  : ""
              }`}
              onClick={() => handleCategory(reportCategory)}
            >
              <img
                src={`/icons/beranda/${reportCategory.iconText}`}
                alt={reportCategory.name}
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
              />
              <div
                className={`text-[9px] md:text-[12px] ${
                  filter?.categoryId === reportCategory.id ? "font-medium" : ""
                } ${
                  reportCategory.id === 4
                    ? "w-[60px] md:w-[100px] text-center"
                    : ""
                }`}
              >
                {reportCategory.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BerandaMenu;

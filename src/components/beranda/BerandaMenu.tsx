import { ReportCategory, reportCategories } from "@/types/report/category";
import * as React from "react";

export interface BerandaMenuProps {
  category: ReportCategory | null;
  setCategory: React.Dispatch<React.SetStateAction<ReportCategory | null>>;
}

const BerandaMenu: React.FC<BerandaMenuProps> = ({ category, setCategory }) => {
  const handleCategory = (category: ReportCategory | null) => {
    setCategory(category);
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
            !!category ? "" : "bg-primary text-white rounded-md"
          }`}
          onClick={() => handleCategory(null)}
        >
          <img
            src="/icons/beranda/all_reporting_menu.svg"
            alt="Semua Laporan"
            className="w-[24px] h-[24px]"
          />
          <div className={`text-[9px] ${!!category ? "" : "font-medium"}`}>
            Semua
          </div>
        </div>
        {reportCategories.map((reportCategorie) => (
          <div
            key={reportCategorie.id}
            className={`flex flex-col items-center justify-center gap-1 h-[56px] w-[56px] ${
              category?.id === reportCategorie.id
                ? "bg-primary text-white rounded-md"
                : ""
            }`}
            onClick={() => handleCategory(reportCategorie)}
          >
            <img
              src={`/icons/beranda/${reportCategorie.iconText}`}
              alt={reportCategorie.name}
              className="w-[24px] h-[24px]"
            />
            <div
              className={`text-[9px] ${
                category?.id === reportCategorie.id ? "font-medium" : ""
              }`}
            >
              {reportCategorie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BerandaMenu;

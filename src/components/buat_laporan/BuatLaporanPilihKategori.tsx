import { ReportCategory, reportCategories } from "@/types/report/category";
import { ReportForm } from "@/types/report/report";
import * as React from "react";

export interface BuatLaporanPilihKategoriProps {
  onReportFormChange: (reportForm: ReportForm) => void;
}

const BuatLaporanPilihKategori: React.FC<BuatLaporanPilihKategoriProps> = ({
  onReportFormChange,
}) => {
  const handleCategoryClick = (category: ReportCategory) => {
    onReportFormChange({
      category,
      content: {
        title: "",
        description: "",
        attachments: [],
      },
      location: {},
    });
  };

  return (
    <>
      <div className="p-[16px] md:px-[32px]">
        <div className="text-[24px] font-medium">Pilih Kategori</div>
        <div className="text-[14px] text-gray-500 mt-[8px]">
          Silakan pilih kategori laporan Anda
        </div>
        <div className="mt-[24px] space-y-4">
          {reportCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-md bg-[#00B29126] cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="flex items-center gap-3 justify-between p-[10px] md:px-[14px]">
                <div className="flex items-center gap-1 md:gap-2 bg-white rounded-full px-[8px] py-[4px] md:px-[12px]">
                  <img
                    src={`/icons/${category.iconText}`}
                    alt="flag"
                    height="24"
                  />
                  <div className="text-[14px] font-medium">{category.name}</div>
                </div>
                <img
                  src="/icons/arrow_right_circle.svg"
                  alt="flag"
                  width={22}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuatLaporanPilihKategori;

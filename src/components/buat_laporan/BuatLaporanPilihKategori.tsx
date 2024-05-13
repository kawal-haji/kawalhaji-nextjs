import * as React from "react";

export interface BuatLaporanPilihKategoriProps {}

const BuatLaporanPilihKategori: React.FC<
  BuatLaporanPilihKategoriProps
> = ({}) => {
  return (
    <>
      <div className="p-[16px]">
        <div className="text-[24px] font-medium">Pilih Kategori</div>
        <div className="text-[14px] text-gray-500 mt-[8px]">
          Silakan pilih kategori laporan Anda
        </div>
        <div className="mt-[24px] space-y-4">
          <div>
            <a href="/buat-laporan?category_name=">
              <div className="rounded-md bg-[#00B29126]">
                <div className="flex items-center gap-3 justify-between p-[10px]">
                  <div className="flex items-center gap-1 bg-white rounded-full px-[8px] py-[4px]">
                    <img src="/icons/konsumsi.png" alt="flag" height="24" />
                    <div className="text-[14px] font-medium">Konsumsi</div>
                  </div>
                  <img
                    src="/icons/arrow_right_circle.svg"
                    alt="flag"
                    height="24"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuatLaporanPilihKategori;

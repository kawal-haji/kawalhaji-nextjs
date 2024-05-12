import * as React from "react";

export interface BerandaMenuProps {}

const BerandaMenu: React.FC<BerandaMenuProps> = ({}) => {
  return (
    <div className="mx-[16px] p-[8px] bg-white rounded-md mt-[10px]">
      <div className="font-medium text-[12px]">Telusuri Laporan</div>
      <div className="text-[10px] text-gray-500">
        Telusuri laporan berdasarkan kategori berikut
      </div>
      <div className="flex items-center justify-between overflow-x-auto">
        <div className="flex flex-col items-center justify-center gap-1 h-[56px] w-[56px]">
          <img
            src="/icons/beranda/all_reporting_menu.svg"
            alt="Semua Laporan"
            className="w-[24px] h-[24px]"
          />
          <div className="text-[9px]">Semua</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 h-[56px] w-[56px]">
          <img
            src="/icons/beranda/konsumsi_reporting_menu.svg"
            alt="Konsumsi"
            className="w-[24px] h-[24px]"
          />
          <div className="text-[9px]">Konsumsi</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 h-[56px] w-[56px]">
          <img
            src="/icons/beranda/akomodasi_reporting_menu.svg"
            alt="Akomodasi"
            className="w-[24px] h-[24px]"
          />
          <div className="text-[9px]">Akomodasi</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 h-[56px] w-[56px]">
          <img
            src="/icons/beranda/transportasi_reporting_menu.svg"
            alt="Transportasi"
            className="w-[24px] h-[24px]"
          />
          <div className="text-[9px]">Transportasi</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 h-[56px] w-[56px]">
          <img
            src="/icons/beranda/orang_hilang_reporting_menu.svg"
            alt="Trasportasi"
            className="w-[24px] h-[24px]"
          />
          <div className="text-[9px]">Orang Hilang</div>
        </div>
      </div>
    </div>
  );
};

export default BerandaMenu;

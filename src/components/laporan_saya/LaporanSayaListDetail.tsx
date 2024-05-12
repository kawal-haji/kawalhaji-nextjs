import * as React from "react";

export interface LaporanSayaListDetailProps {}

const LaporanSayaListDetail: React.FC<LaporanSayaListDetailProps> = ({}) => {
  return (
    <>
      <div className="w-[275px]">
        <div className="bg-white rounded-md px-[12px] pt-[12px] w-[275px]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] text-gray-500">
                17 Nov 2024, 12:00
              </div>
              <div className="text-[12px] font-medium mt-[4px]">
                Ini adalah title laporan lorem ipsum dolor ist amet
              </div>
            </div>
            <img
              src="/icons/beranda/transportasi_reporting_menu.svg"
              alt="more"
              className="w-[32px] h-[32px]"
            />
          </div>
          <div className="flex items-center">
            <button className="btn btn-ghost text-[10px]">
              <img
                src="/icons/comment.svg"
                alt="Komentar"
                className="w-[16px] h-[16px]"
              />
              16 Respon
            </button>
            <button className="btn btn-ghost btn-success text-green-600 text-[10px]">
              <img
                src="/icons/arrow_circle_up.svg"
                alt="Dukungan"
                className="w-[16px] h-[16px]"
              />
              86 Dukungan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanSayaListDetail;

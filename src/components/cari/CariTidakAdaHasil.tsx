import * as React from "react";

export interface CariTidakAdaHasilProps {}

const CariTidakAdaHasil: React.FC<CariTidakAdaHasilProps> = ({}) => {
  return (
    <div className="p-[20px]">
      <img
        src="/icons/no_result.svg"
        alt="empty"
        className="w-[100px] h-[100px] mx-auto"
      />
      <div className="text-center text-[16px] mt-[20px] font-semibold">
        Pencarian tidak ditemukan!{" "}
      </div>
      <div className="text-center text-[14px] text-gray-500 mt-[12px]">
        Saat ini belum terdapat laporan yang sesuai dengan pencarian Anda.
      </div>
    </div>
  );
};

export default CariTidakAdaHasil;

import * as React from "react";

export interface RiwayatTidakAdaProps {}

const RiwayatTidakAda: React.FC<RiwayatTidakAdaProps> = ({}) => {
  return (
    <div className="p-[20px]">
      <img
        src="/icons/empty_history.svg"
        alt="empty"
        className="w-[100px] h-[100px] mx-auto"
      />
      <div className="text-center text-[16px] mt-[20px] font-semibold">
        Riwayat Kosong
      </div>
      <div className="text-center text-[14px] text-gray-500 mt-[12px]">
        Anda belum pernah membuat laporan. Silakan membuat laporan jika Anda
        menemukan permasalahan!
      </div>
    </div>
  );
};

export default RiwayatTidakAda;

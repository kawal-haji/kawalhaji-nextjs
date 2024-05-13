import * as React from "react";

import LaporanList from "@/components/laporan/LaporanList";

export interface CariHasilPencarianProps {}

const CariHasilPencarian: React.FC<CariHasilPencarianProps> = ({}) => {
  return (
    <>
      <div className="pb-[32px]">
        <div className="py-[12px] px-[16px]">
          <LaporanList />
        </div>
      </div>
    </>
  );
};

export default CariHasilPencarian;

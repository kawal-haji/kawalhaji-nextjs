import * as React from "react";

import { Jamaah } from "@/types/jamaah";

export interface DetailJamaahProps {
  jamaah: Jamaah;
}

const DetailJamaah: React.FC<DetailJamaahProps> = ({ jamaah }) => {
  return (
    <div className="bg-spot-pallate mx-[16px] shadow-md mb-[10px] rounded-md">
      <div className="p-[12px] md:px-[24px] space-y-2 md:space-y-4">
        <div className="text-[18px] md:text-[20px] font-bold">
          {jamaah.namaPaspor}
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 text-[12px] md:text-[14px]">
          <div>
            <div className="font-medium">No. Paspor</div>
            <div className="md:text-[16px]">{jamaah.noPaspor || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Porsi</div>
            <div className="md:text-[16px]">{jamaah.noPorsi || "-"}</div>
          </div>
          <div>
            <div className="font-medium">EMB</div>
            <div className="md:text-[16px]">{jamaah.emb || "-"}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[12px] md:text-[14px]">
          <div>
            <div className="font-medium">Kloter</div>
            <div className="md:text-[16px]">{jamaah.kloter || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Maktab</div>
            <div className="md:text-[16px]">{jamaah.noMaktab || "-"}</div>
          </div>
          <div>
            <div className="font-medium">Wilayah Makkah</div>
            <div className="md:text-[16px]">{jamaah.wilayahMakkah || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Rumah Makkah</div>
            <div className="md:text-[16px]">{jamaah.noRumahMakkah || "-"}</div>
          </div>
          <div>
            <div className="font-medium">Gedung</div>
            <div className="md:text-[16px]">{jamaah.gedung || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Lantai</div>
            <div className="md:text-[16px]">{jamaah.nomorLantai || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Kamar</div>
            <div className="md:text-[16px]">{jamaah.nomorKamar || "-"}</div>
          </div>
          <div>
            <div className="font-medium">Nama Hotel</div>
            <div className="md:text-[16px]">{jamaah.namaHotel || "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailJamaah;

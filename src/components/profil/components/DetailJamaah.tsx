import * as React from "react";

import { Jamaah } from "@/types/jamaah";

export interface DetailJamaahProps {
  jamaah: Jamaah;
}

const DetailJamaah: React.FC<DetailJamaahProps> = ({ jamaah }) => {
  return (
    <div className="bg-spot-pallate mx-[16px] shadow-md mb-[10px] rounded-md">
      <div className="p-[12px] space-y-2">
        <div className="text-[18px] font-bold">{jamaah.namaPaspor}</div>
        <div className="grid grid-cols-3 gap-2 text-[12px]">
          <div>
            <div className="font-medium">No. Paspor</div>
            <div>{jamaah.noPaspor || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Porsi</div>
            <div>{jamaah.noPorsi || "-"}</div>
          </div>
          <div>
            <div className="font-medium">EMB</div>
            <div>{jamaah.emb || "-"}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[12px]">
          <div>
            <div className="font-medium">Kloter</div>
            <div>{jamaah.kloter || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Maktab</div>
            <div>{jamaah.noMaktab || "-"}</div>
          </div>
          <div>
            <div className="font-medium">Wilayah Makkah</div>
            <div>{jamaah.wilayahMakkah || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Rumah Makkah</div>
            <div>{jamaah.noRumahMakkah || "-"}</div>
          </div>
          <div>
            <div className="font-medium">Gedung</div>
            <div>{jamaah.gedung || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Lantai</div>
            <div>{jamaah.nomorLantai || "-"}</div>
          </div>
          <div>
            <div className="font-medium">No. Kamar</div>
            <div>{jamaah.nomorKamar || "-"}</div>
          </div>
          <div>
            <div className="font-medium">Nama Hotel</div>
            <div>{jamaah.namaHotel || "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailJamaah;

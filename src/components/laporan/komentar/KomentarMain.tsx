import * as React from "react";

export interface KomentarMainProps {
  xid: string;
}

const KomentarMain: React.FC<KomentarMainProps> = ({ xid }) => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="px-[16px] py-[12px]">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="truncate">George Russel</div>
          <img
            src="/icons/verified_flag.svg"
            alt="verified"
            className="w-[12px] h-[12px]"
          />
          <div className="text-gray-400">17 Nov 2024, 10:15</div>
        </div>
        <div className="rounded-md text-gray-500 bg-gray-50 px-2 py-1 text-[12px]">
          Wah kejadiannya sama seperti yang saya alami
        </div>
      </div>
      <div className="px-[16px] py-[12px]">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="truncate">George Russel</div>
          <div className="text-gray-400">17 Nov 2024, 10:15</div>
        </div>
        <div className="rounded-md text-gray-500 bg-gray-50 px-2 py-1 text-[12px]">
          Saya juga, di tendanya no.3 makanannya kurang bersih
        </div>
      </div>
      <div className="px-[16px] py-[12px]">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="truncate">George Russel</div>
          <div className="text-gray-400">17 Nov 2024, 10:15</div>
        </div>
        <div className="rounded-md text-gray-500 bg-gray-50 px-2 py-1 text-[12px]">
          Saya juga, di tendanya no.3 makanannya kurang bersih
        </div>
      </div>
      <div className="px-[16px] py-[12px]">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="truncate">George Russel</div>
          <div className="text-gray-400">17 Nov 2024, 10:15</div>
        </div>
        <div className="rounded-md text-gray-500 bg-gray-50 px-2 py-1 text-[12px]">
          Saya juga, di tendanya no.3 makanannya kurang bersih
        </div>
      </div>
      <div className="px-[16px] py-[12px]">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="truncate">George Russel</div>
          <div className="text-gray-400">17 Nov 2024, 10:15</div>
        </div>
        <div className="rounded-md text-gray-500 bg-gray-50 px-2 py-1 text-[12px]">
          Saya juga, di tendanya no.3 makanannya kurang bersih
        </div>
      </div>
      <div className="px-[16px] py-[12px]">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="truncate">Kementrian Agama</div>
          <img
            src="/icons/protected_flag.svg"
            alt="verified"
            className="w-[12px] h-[12px]"
          />
          <div className="text-gray-400">17 Nov 2024, 10:15</div>
        </div>
        <div className="rounded-md text-gray-500 bg-green-50 px-2 py-1 text-[12px]">
          Saya juga, di tendanya no.3 makanannya kurang bersih
        </div>
      </div>
    </div>
  );
};

export default KomentarMain;

import { useListReportComment } from "@/hooks/user_report/useListReportComment";
import * as React from "react";

export interface ListKomentarProps {
  xid: string;
}

const ListKomentar: React.FC<ListKomentarProps> = ({ xid }) => {
  const {} = useListReportComment({ xid });

  return (
    <div className="divide-y divide-gray-100">
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

export default ListKomentar;

import * as React from "react";

import { StatusReport } from "@/types/report/report";

export interface StatusLaporanTextProps {
  status: StatusReport;
}

const StatusLaporanText: React.FC<StatusLaporanTextProps> = ({ status }) => {
  if (status.name === "Active") {
    return (
      <div className="bg-green-200 text-green-500 rounded-full px-2 py-1 text-[10px] md:text-[12px] font-bold md:px-4">
        Laporan Aktif
      </div>
    );
  }

  if (status.name === "Closed") {
    return (
      <div className="bg-gray-200 text-gray-500 rounded-full px-2 py-1 text-[10px] md:text-[12px] font-bold md:px-4">
        Laporan Ditutup
      </div>
    );
  }

  return (
    <div className="bg-blue-200 text-blue-500 rounded-full px-2 py-1 text-[10px] md:text-[12px] font-bold md:px-4">
      Laporan Selesai
    </div>
  );
};

export default StatusLaporanText;

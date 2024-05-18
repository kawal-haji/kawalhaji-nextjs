import * as React from "react";

import { StatusReport } from "@/types/report/report";

export interface TutupLaporanProps {
  statusReport: StatusReport;
}

const TutupLaporan: React.FC<TutupLaporanProps> = ({ statusReport }) => {
  if (statusReport.name === "Active") {
    return null;
  }

  return (
    <>
      <button className="btn btn-sm text-[13px] font-medium btn-outline border-[#E83475] text-[#E83475]">
        <img
          src="/icons/alert_circle_solid.svg"
          alt="Alert"
          className="w-[16px] h-[16px]"
        />
        Tutup Laporan
      </button>
      <dialog id="close_reporting_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Konfirmasi Tutup Laporan</h3>
          <p className="py-4">Konfirmasi Tutup Laporan</p>
          <div className="modal-action">
            <button className="btn bg-gray-100 text-primary">
              Tidak, Kembali
            </button>
            <button className="btn bg-primary text-white">
              Ya, Tutup Laporan
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TutupLaporan;

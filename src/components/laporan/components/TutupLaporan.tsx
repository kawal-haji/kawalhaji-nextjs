import * as React from "react";

import { useChangeReportStatus } from "@/hooks/user_report/useChangeReportStatus";
import { ReportStatusEnum, StatusReport } from "@/types/report/report";

export interface TutupLaporanProps {
  xid: string;
  version: string;
  statusReport: StatusReport;
}

const TutupLaporan: React.FC<TutupLaporanProps> = ({
  xid,
  version,
  statusReport,
}) => {
  const closeReportingRef = React.useRef<HTMLDialogElement>(null);
  const { mutate: changeStatus, isPending: isLoading } =
    useChangeReportStatus();
  const handleChangeStatus = () => {
    changeStatus(
      {
        xid,
        version,
        status: ReportStatusEnum.CLOSED,
      },
      {
        onSuccess: () => {
          closeReportingRef.current?.close();
        },
      }
    );
  };

  if (statusReport.name !== "Active") {
    return null;
  }

  return (
    <>
      <button
        className="btn btn-sm text-[13px] font-medium btn-outline border-[#E83475] text-[#E83475]"
        onClick={() => closeReportingRef.current?.showModal()}
      >
        <img
          src="/icons/alert_circle_solid.svg"
          alt="Alert"
          className="w-[16px] h-[16px]"
        />
        Tutup Laporan
      </button>
      <dialog ref={closeReportingRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Konfirmasi Tutup Laporan</h3>
          <p className="py-4">Konfirmasi Tutup Laporan</p>
          <div className="modal-action">
            <button
              className="btn bg-gray-100 text-primary"
              onClick={() => closeReportingRef.current?.close()}
            >
              Tidak, Kembali
            </button>
            <button
              className="btn bg-primary text-white"
              onClick={handleChangeStatus}
            >
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Ya, Tutup Laporan"
              )}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TutupLaporan;

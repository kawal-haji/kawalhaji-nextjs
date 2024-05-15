import BuatLaporanForm from "@/components/buat_laporan/BuatLaporanForm";
import BuatLaporanPilihKategori from "@/components/buat_laporan/BuatLaporanPilihKategori";
import { ReportForm } from "@/types/report/report";
import { useRouter } from "next/router";
import * as React from "react";

export interface BuatLaporanMainProps {}

const BuatLaporanMain: React.FC<BuatLaporanMainProps> = ({}) => {
  const router = useRouter();
  const [reportForm, setReportForm] = React.useState<ReportForm>();

  const handleReportFormChange = (reportForm: ReportForm) => {
    setReportForm(reportForm);
  };

  const handleSaveReport = () => {
    console.log("Save report");
  };

  const handleBack = () => {
    if (reportForm?.category) {
      setReportForm(undefined);
    } else {
      router.back();
    }
  };

  return (
    <div className="h-screen relative bg-white">
      <div className="flex items-center gap-4 border-b-2 border-b-gray-200 py-[18px] px-[16px]">
        <img
          src="/icons/arrow_left.svg"
          alt="back"
          height="24"
          onClick={handleBack}
        />
        <div className="text-[17px] font-medium">Buat Laporan Baru</div>
      </div>
      {!reportForm?.category && (
        <BuatLaporanPilihKategori onReportFormChange={handleReportFormChange} />
      )}
      {!!reportForm?.category && (
        <BuatLaporanForm
          onReportFormChange={handleReportFormChange}
          reportForm={reportForm}
          onReportFormSubmit={handleSaveReport}
        />
      )}
    </div>
  );
};

export default BuatLaporanMain;

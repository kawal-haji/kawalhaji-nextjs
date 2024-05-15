import Geolocation from "@/components/geolocation/Geolocation";
import { ReportForm } from "@/types/report/report";
import * as React from "react";

export interface BuatLaporanFormProps {
  reportForm: ReportForm;
  onReportFormChange: (reportForm: ReportForm) => void;
}

const BuatLaporanForm: React.FC<BuatLaporanFormProps> = ({
  reportForm,
  onReportFormChange,
}) => {
  return (
    <>
      <form method="post" action="/simpan-laporan-baru">
        <div>
          <div className="p-[16px] overflow-y-auto h-[calc(100vh-150px)]">
            <div className="text-[24px] font-medium">Detail Laporan</div>
            <div className="text-[14px] text-gray-500 mt-[8px]">
              Silakan isi detail laporan Anda
            </div>
            <div className="mt-[24px] space-y-2">
              <div className="bg-spot-pallate rounded-md">
                <div className="space-y-2 px-[12px] py-[8px]">
                  <div className="flex items-center gap-2 justify-between px-[8px] py-[6px] bg-[#F2EBD0] rounded-xl">
                    <div className="text-[12px] font-medium">
                      Kategori Laporan
                    </div>
                    <div className="flex items-center gap-1 bg-white rounded-full px-[8px] py-[4px]">
                      <img
                        src={`/icons/${reportForm.category.icon}`}
                        alt="flag"
                        height="24"
                      />
                      <div className="text-[14px] font-medium">
                        {reportForm.category.name}
                      </div>
                    </div>
                  </div>
                  <Geolocation />
                </div>
              </div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-[12px]">Judul Laporan</span>
                </div>
                <input
                  type="text"
                  name="judul"
                  placeholder="Masukan judul laporan"
                  className="input input-bordered w-full text-[14px]"
                  value={reportForm.content.title}
                  onChange={(e) =>
                    onReportFormChange({
                      ...reportForm,
                      content: {
                        ...reportForm.content,
                        title: e.target.value,
                      },
                    })
                  }
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-[12px]">
                    Tambahan Keterangan
                  </span>
                </div>
                <textarea
                  name="keterangan"
                  placeholder="Masukan tambahan keterangan"
                  className="textarea textarea-bordered w-full text-[14px]"
                  value={reportForm.content.description}
                  onChange={(e) =>
                    onReportFormChange({
                      ...reportForm,
                      content: {
                        ...reportForm.content,
                        description: e.target.value,
                      },
                    })
                  }
                ></textarea>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-[12px]">Foto/Video</span>
                </div>
                <div className="space-y-2">
                  <input
                    type="file"
                    name="media[]"
                    className="file-input file-input-bordered w-full text-[14px]"
                  />
                  <input
                    type="file"
                    name="media[]"
                    className="file-input file-input-bordered w-full text-[14px]"
                  />
                  <input
                    type="file"
                    name="media[]"
                    className="file-input file-input-bordered w-full text-[14px]"
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="px-[16px] py-[14px] border-t-2 border-t-gray-200">
            <button type="submit" className="btn bg-primary w-full text-white">
              Kirim Laporan
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BuatLaporanForm;

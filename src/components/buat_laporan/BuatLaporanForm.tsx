import * as React from "react";

export interface BuatLaporanFormProps {}

const BuatLaporanForm: React.FC<BuatLaporanFormProps> = ({}) => {
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
                      <img src="/icons/konsumsi.png" alt="flag" height="24" />
                      <div className="text-[14px] font-medium">Konsumsi</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-between pb-[2px]">
                    <span
                      id="loading-location"
                      className="loading loading-spinner loading-lg text-primary hidden"
                    ></span>
                    <img
                      id="icon-location-found"
                      src="/icons/location.svg"
                      className="hidden"
                      alt="location"
                    />
                    <img
                      id="icon-location-not-found"
                      src="/icons/location_disabled.svg"
                      className="hidden"
                      alt="location"
                    />
                    <div className="w-full">
                      <div className="text-[12px] font-medium">Lokasi Anda</div>
                      <div id="name-location" className="text-[12px]">
                        InterContinental Dar al Tawhid Makkah
                      </div>
                    </div>
                    <button
                      className="btn btn-sm bg-primary text-white rounded-full hidden"
                      id="btn-grant-location-permission"
                    >
                      <img
                        src="/icons/refresh.svg"
                        alt="refresh"
                        className="w-[16px] h-[16px] text-white"
                      />
                    </button>
                  </div>
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

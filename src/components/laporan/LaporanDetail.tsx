import * as React from "react";

export interface LaporanDetailProps {
  id: number;
}

const LaporanDetail: React.FC<LaporanDetailProps> = ({}) => {
  return (
    <>
      <div className="bg-white h-screen relative">
        <div className="sticky top-0 bg-white z-50">
          <div className="flex items-center gap-4 p-[16px] border-b-2 border-b-gray-100">
            <img src="/icons/arrow_left.svg" alt="arrow_left" height="24" />
            <div className="text-[17px] font-medium">Detail Laporan</div>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-48px)]">
          <div className="flex items-center gap-4 px-[16px] py-[12px] border-b border-b-gray-100">
            <div className="text-[10px]">
              <div>No. Laporan</div>
              <div>2324242A</div>
            </div>
            <div className="mr-auto">
              <div className="bg-gray-200 text-gray-500 rounded-full px-2 py-1 text-[10px] font-bold">
                Laporan Ditutup
              </div>
              <div className="bg-green-200 text-green-500 rounded-full px-2 py-1 text-[10px] font-bold">
                Laporan Aktif
              </div>
            </div>
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
          </div>
          <div className="px-[16px] py-[12px] space-y-2 border-b-8 border-b-gray-100">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1">
                  <div className="text-[10px] font-medium truncate">
                    Carlos Sainz
                  </div>
                  <img
                    src="/icons/verified_flag.svg"
                    alt="verified"
                    className="w-[12px] h-[12px]"
                  />
                </div>
                <div className="text-[10px] text-gray-500">
                  17 Nov 2024, 12:00
                </div>
              </div>
              <div className="rounded-full bg-green-100  px-2 py-1">
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/food.svg"
                    alt="more"
                    className="w-[16px] h-[16px]"
                  />
                  <div className="text-[10px] text-green-500">Makanan</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[14px] font-semibold">
                Makanan Kurang Bersih
              </div>
              <div className="text-[12px] text-gray-500">
                Makanan yang saya dapatkan kurang bersih. Banyak yang terkena
                diare.
              </div>
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <img
                  src="/images/food_example_1.png"
                  alt="like"
                  className="w-[93px] h-[93px] rounded-md object-cover"
                />
                <img
                  src="/images/food_example_2.png"
                  alt="like"
                  className="w-[93px] h-[93px] rounded-md object-cover"
                />
                <div className="relative rounded-md">
                  <img
                    src="/images/food_example_2.png"
                    alt="like"
                    className="w-[93px] h-[93px] rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center  rounded-md">
                    <img src="/icons/play.svg" alt="Play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[12px]">Lokasi</div>
            <div className="flex items-start gap-2 justify-between p-[8px] bg-spot-pallate">
              <img src="/icons/location.svg" alt="location" />
              <div className="w-full">
                <div className="text-[12px] font-medium">Lokasi Anda</div>
                <div id="name-location" className="text-[12px]">
                  InterContinental Dar al Tawhid Makkah
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="btn btn-ghost text-[10px]">
                <img
                  src="/icons/comment.svg"
                  alt="Komentar"
                  className="w-[16px] h-[16px]"
                />
                16 Respon
              </button>
              <button className="btn btn-outline btn-sm btn-success text-green-600 text-[10px]">
                <img
                  src="/icons/arrow_circle_up.svg"
                  alt="Dukungan"
                  className="w-[16px] h-[16px]"
                />
                86 Dukungan
              </button>
            </div>
          </div>
          <div className="p-[20px]">
            <img
              src="/icons/empty_comment.svg"
              alt="empty"
              className="w-[100px] h-[100px] mx-auto"
            />
            <div className="text-center text-[16px] mt-[20px] font-semibold">
              Belum terdapat komentar!
            </div>
            <div className="text-center text-[14px] text-gray-500 mt-[12px]">
              Saat ini belum terdapat komentar terkait laporan ini.
            </div>
          </div>
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
        </div>
        <div className="absolute bottom-0 w-full h-[56px]">
          <div className="bg-[#FDEBF1] text-[#E83475] text-[16px] h-[56px] text-center py-5 font-bold">
            Laporan Ditutup
          </div>
          <label className="input flex items-center gap-2 h-[56px]">
            <input
              type="text"
              className="grow border-none text-[14px] h-[56px]"
              placeholder="Tambahkan komentar..."
            />
            <img
              src="/icons/send_comment.svg"
              alt="search"
              className="w-[32px] h-[32px]"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default LaporanDetail;

import CariTidakAdaHasil from "@/components/cari/CariTidakAdaHasil";
import LaporanList from "@/components/laporan/LaporanList";
import * as React from "react";

export interface CariMainProps {}

const CariMain: React.FC<CariMainProps> = ({}) => {
  return (
    <>
      <div className="h-screen relative">
        <div className="bg-white">
          <div className=" px-[16px] py-[8px]">
            <div className="flex items-center gap-4">
              <div className="w-full">
                <label className="input input-bordered flex items-center gap-2 bg-gray-200 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-[24px] h-[24px] text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    className="grow border-none"
                    placeholder="Cari Laporan"
                  />
                </label>
              </div>
              <img
                src="/icons/sort.svg"
                alt="Filter"
                className="w-[24px] h-[24px]"
              />
              <dialog id="filter_pencarian_menu_modal" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-[20px]">Urutkan</h3>
                  <div className="space-y-2 py-[12px]">
                    <div className="form-control border border-primary rounded-md p-[10px]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort_search"
                          className="radio checked:bg-primary"
                          checked
                        />
                        <div className="text-[14px]">
                          Urutkan dukungan terbanyak
                        </div>
                      </label>
                    </div>
                    <div className="form-control border border-gray-200 rounded-md p-[10px]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort_search"
                          className="radio checked:bg-primary"
                        />
                        <div className="text-[14px]">
                          Urutkan komentar terbanyak
                        </div>
                      </label>
                    </div>
                    <div className="form-control border border-gray-200 rounded-md p-[10px]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort_search"
                          className="radio checked:bg-primary"
                        />
                        <div className="text-[14px]">
                          Urutkan laporan terbaru
                        </div>
                      </label>
                    </div>
                    <div className="form-control border border-gray-200 rounded-md p-[10px]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort_search"
                          className="radio checked:bg-primary"
                        />
                        <div className="text-[14px]">Urutkan menurut abjad</div>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex-grow btn text-primary">
                      Reset
                    </button>
                    <button className="flex-grow btn bg-primary text-white">
                      Simpan
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div role="tablist" className="tabs tabs-bordered overflow-x-auto">
            <a role="tab" className="tab h-[44px] tab-active ">
              <div className="flex items-center gap-2 px-[12px] py-[8px]">
                <img
                  src="/icons/makkah_overlay.svg"
                  alt="Semua"
                  className="w-[24px] h-[24px]"
                />
                <div className="text-primary">Semua</div>
              </div>
            </a>
            <a role="tab" className="tab h-[44px]">
              <div className="flex items-center gap-2 px-[12px] py-[8px]">
                <img
                  src="/icons/food.svg"
                  alt="Semua"
                  className="w-[24px] h-[24px]"
                />
                <div className="text-[#999999]">Konsumsi</div>
              </div>
            </a>
            <a role="tab" className="tab h-[44px]">
              <div className="flex items-center gap-2 px-[12px] py-[8px]">
                <img
                  src="/icons/akomodasi.svg"
                  alt="Semua"
                  className="w-[24px] h-[24px]"
                />
                <div className="text-[#999999]">Akomodasi</div>
              </div>
            </a>
            <a role="tab" className="tab h-[44px]">
              <div className="flex items-center gap-2 px-[12px] py-[8px]">
                <img
                  src="/icons/transportasi.svg"
                  alt="Semua"
                  className="w-[24px] h-[24px]"
                />
                <div className="text-[#999999]">Transportasi</div>
              </div>
            </a>
            <a role="tab" className="tab h-[44px]">
              <div className="flex items-center gap-2 px-[12px] py-[8px]">
                <img
                  src="/icons/orang_hilang.svg"
                  alt="Semua"
                  className="w-[24px] h-[24px]"
                />
                <div className="text-[#999999] w-[105px]">Orang Hilang</div>
              </div>
            </a>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          <CariTidakAdaHasil />
          <LaporanList />
        </div>
      </div>
    </>
  );
};

export default CariMain;

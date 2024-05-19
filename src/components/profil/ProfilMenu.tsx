import Version from "@/components/profil/components/Version";
import SyaratKetentuanTeks from "@/components/syarat_ketentuan/SyaratKetentuanTeks";
import * as React from "react";

export interface ProfilMenuProps {}

const ProfilMenu: React.FC<ProfilMenuProps> = ({}) => {
  return (
    <>
      <ul className="menu w-full p-[16px] [&_li>*]:rounded-none divide-y divide-[#EDF4E9]">
        <li>
          <a href="#">
            <img
              src="/icons/clipboard.svg"
              alt="Clipbooard"
              className="w-[16px] h-[16px]"
            />
            <span className="text-[12px] font-medium mr-auto">
              Syarat & Ketentuan
            </span>
            <img
              src="/icons/arrow_right_circle.svg"
              alt="Arrow Right"
              className="w-[16px] h-[16px]"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              src="/icons/shield.svg"
              alt="Shield"
              className="w-[16px] h-[16px]"
            />
            <span className="text-[12px] font-medium mr-auto">
              Kebijakan Privasi
            </span>
            <img
              src="/icons/arrow_right_circle.svg"
              alt="Arrow Right"
              className="w-[16px] h-[16px]"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              src="/icons/mobile.svg"
              alt="Mobile"
              className="w-[16px] h-[16px]"
            />
            <div className="flex flex-col">
              <span className="text-[12px] font-medium">Versi Aplikasi</span>
              <span className="text-[10px]">
                <Version />
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="/icons/profile_delete.svg"
              alt="Shield"
              className="w-[16px] h-[16px]"
            />
            <span className="text-[12px] font-medium mr-auto">Hapus Akun</span>
          </a>
        </li>
      </ul>
      <dialog id="syarat_ketentuan_modal" className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">
            Syarat dan Ketentuan Aplikasi Kawal Haji
          </h3>
          <div className="py-4">
            <SyaratKetentuanTeks />
          </div>
          <div className="modal-action">
            <button className="btn bg-gray-100 text-primary">Tutup</button>
          </div>
        </div>
      </dialog>
      <dialog id="delete_account_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Konfirmasi Hapus Akun</h3>
          <p className="py-4">
            Anda akan diarahkan untuk mengisi form permintaan hapus akun.
          </p>
          <div className="modal-action">
            <button className="btn bg-gray-100 text-primary">
              Tidak, Kembali
            </button>
            <button className="btn bg-primary text-white">Arahkan Saya</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProfilMenu;

import Version from "@/components/profil/components/Version";
import SyaratKetentuanTeks from "@/components/syarat_ketentuan/SyaratKetentuanTeks";
import * as React from "react";

export interface ProfilMenuProps {}

const ProfilMenu: React.FC<ProfilMenuProps> = ({}) => {
  const syaratRef = React.useRef<HTMLDialogElement>(null);

  return (
    <>
      <ul className="menu w-full p-[16px] [&_li>*]:rounded-none divide-y divide-[#EDF4E9]">
        <li>
          <a href="#" onClick={() => syaratRef.current?.showModal()}>
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
        {/* <li>
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
        </li> */}
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
      </ul>
      <dialog ref={syaratRef} className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => syaratRef.current?.close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">
            Syarat dan Ketentuan Aplikasi Kawal Haji
          </h3>
          <div className="py-4">
            <SyaratKetentuanTeks />
          </div>
          <div className="modal-action">
            <button
              className="btn bg-gray-100 text-primary"
              onClick={() => syaratRef.current?.close()}
            >
              Tutup
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProfilMenu;

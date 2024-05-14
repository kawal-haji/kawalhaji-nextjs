import ProfilMenu from "@/components/profil/ProfilMenu";
import { signOut } from "next-auth/react";
import * as React from "react";

export interface ProfilMainProps {}

const ProfilMain: React.FC<ProfilMainProps> = ({}) => {
  const refModalLogout = React.useRef<HTMLDialogElement>(null);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="h-screen relative bg-white">
      <img
        src="/icons/background_header_profile.svg"
        alt="Background"
        className="absolute top-0 left-0 w-full object-cover h-[150px]"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="px-[16px] py-[18px] text-[17px] font-medium text-white">
          Profil
        </div>
        <div className="flex items-center gap-4 px-[16px] mb-[25px] text-white">
          <img src="/icons/pray.svg" alt="Pray" className="w-[62px] h-[62px]" />
          <div>
            <div className="text-[24px] font-bold">Carlos Sainz</div>
            <div className="text-[12px]">carlos_sainz@gmail.com</div>
          </div>
        </div>
        <div className="px-[16px] pt-[16px]">
          <div className="rounded-md bg-blue-100 p-[10px]">
            <div className="text-[14px] font-medium text-blue-500">
              Verifikasi No. Paspor
            </div>
            <div className="text-[12px]">
              Anda belum terverifikasi, silakan verifikasi untuk dapat
              dikonfirmasi sebagai jemaah
            </div>
            <a
              href="/verifikasi-paspor"
              className="btn text-white bg-blue-500 border-blue-500 btn-sm mt-2"
            >
              Verifikasi Sekarang
            </a>
          </div>
        </div>
        <ProfilMenu />
        <div className="px-[16px]">
          <button
            className="btn btn-outline w-full btn-sm text-[13px]"
            onClick={() => refModalLogout.current?.showModal()}
          >
            Logout
          </button>
        </div>
        <dialog ref={refModalLogout} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Konfirmasi Logout</h3>
            <p className="py-4">Anda yakin ingin melakukan logout?</p>
            <div className="modal-action">
              <button
                className="btn bg-gray-100 text-primary"
                onClick={() => refModalLogout.current?.close()}
              >
                Tidak, Kembali
              </button>
              <button
                className="btn bg-primary text-white"
                onClick={handleLogout}
              >
                Ya, Logout
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ProfilMain;

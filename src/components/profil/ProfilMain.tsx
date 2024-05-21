import ProfilMenu from "@/components/profil/ProfilMenu";
import DetailJamaah from "@/components/profil/components/DetailJamaah";
import { useLogout } from "@/hooks/useLogout";
import { useSession } from "next-auth/react";
import Link from "next/link";
import * as React from "react";

export interface ProfilMainProps {}

const ProfilMain: React.FC<ProfilMainProps> = ({}) => {
  const { data: dataSession } = useSession();
  const refModalLogout = React.useRef<HTMLDialogElement>(null);
  const { mutate: logout, isPending: isLoadingLogout } = useLogout();

  const handleLogout = async () => {
    await logout({});
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
        <div className="flex items-center gap-4 px-[16px] mb-[18px] text-white">
          <img src="/icons/pray.svg" alt="Pray" className="w-[62px] h-[62px]" />
          <div>
            <div className="flex items-center gap-2">
              <div className="truncate text-[16px] font-medium text-white">
                {dataSession?.user?.fullName ?? "Kawal Haji"}
              </div>
              {dataSession?.user?.verified && (
                <img
                  src="/icons/verified_flag.svg"
                  alt="verified"
                  className="w-[16px] h-[16px]"
                />
              )}
            </div>
            <div className="text-[12px]">
              {dataSession?.user?.email ?? "Anda login sebagai tamu"}
            </div>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-140px-80px)] pb-[50px]">
          {!dataSession?.user?.verified && (
            <div className="px-[16px] pt-[20px]">
              <div className="rounded-md bg-blue-100 p-[10px]">
                <div className="text-[14px] font-medium text-blue-500">
                  Verifikasi No. Paspor
                </div>
                <div className="text-[12px]">
                  Anda belum terverifikasi, silakan verifikasi untuk dapat
                  dikonfirmasi sebagai jemaah
                </div>
                <Link
                  href="/user/verifikasi-paspor"
                  className="btn text-white bg-blue-500 border-blue-500 btn-sm mt-2"
                >
                  Verifikasi Sekarang
                </Link>
              </div>
            </div>
          )}
          {!!dataSession?.user?.jamaah && (
            <DetailJamaah jamaah={dataSession?.user?.jamaah} />
          )}
          <ProfilMenu />
          <div className="px-[16px]">
            <button
              className="btn btn-outline w-full btn-sm text-[13px]"
              onClick={() => refModalLogout.current?.showModal()}
            >
              {isLoadingLogout ? (
                <span className="loading loading-spinner" />
              ) : (
                "Logout"
              )}
            </button>
          </div>
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
                {isLoadingLogout ? (
                  <span className="loading loading-spinner" />
                ) : (
                  "Ya, Logout"
                )}
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ProfilMain;

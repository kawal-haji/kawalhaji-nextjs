import ProfilMenu from "@/components/profil/ProfilMenu";
import DetailJamaah from "@/components/profil/components/DetailJamaah";
import FullNameUser from "@/components/profil/components/FullNameUser";
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
        className="absolute top-0 left-0 w-full object-cover h-[150px] md:h-[180px]"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="px-[16px] py-[18px] text-[17px] md:text-[20px] font-medium text-white">
          Profil
        </div>
        <div className="flex items-center gap-4 px-[16px] mb-[18px] text-white">
          <img src="/icons/pray.svg" alt="Pray" className="w-[62px] h-[62px]" />
          <div>
            <FullNameUser />
            <div className="text-[12px] md:text-[14px]">
              {dataSession?.user?.email ?? "Anda login sebagai tamu"}
            </div>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-140px-80px)] pb-[50px]">
          {!dataSession?.user?.verified && !!dataSession?.user?.xid && (
            <div className="px-[16px] pt-[20px]">
              <div className="rounded-md bg-blue-100 p-[10px] md:p-[18px]">
                <div className="text-[14px] md:text-[16px] font-medium text-blue-500">
                  Verifikasi No. Paspor
                </div>
                <div className="text-[12px] md:text-[14px]">
                  Anda belum terverifikasi, silakan verifikasi untuk dapat
                  dikonfirmasi sebagai jemaah
                </div>
                <Link
                  href="/user/verifikasi-paspor"
                  className="btn text-white bg-blue-500 border-blue-500 btn-sm mt-2 md:mt-3"
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
              className="btn btn-outline w-full btn-sm md:btn-md text-[13px] md:text-[14px]"
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

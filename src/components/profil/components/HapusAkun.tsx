import * as React from "react";

export interface HapusAkunProps {}

const HapusAkun: React.FC<HapusAkunProps> = ({}) => {
  const accountModalRef = React.useRef<HTMLDialogElement>(null);

  return (
    <>
      <a href="#" onClick={() => accountModalRef.current?.showModal()}>
        <img
          src="/icons/profile_delete.svg"
          alt="Shield"
          className="w-[16px] h-[16px]"
        />
        <span className="text-[12px] font-medium mr-auto">Hapus Akun</span>
      </a>
      <dialog ref={accountModalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Konfirmasi Hapus Akun</h3>
          <p className="py-4">
            Anda akan diarahkan untuk mengisi form permintaan hapus akun.
          </p>
          <div className="modal-action">
            <button
              className="btn bg-gray-100 text-primary"
              onClick={() => accountModalRef.current?.close()}
            >
              Tidak, Kembali
            </button>
            <button className="btn bg-primary text-white">Arahkan Saya</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default HapusAkun;

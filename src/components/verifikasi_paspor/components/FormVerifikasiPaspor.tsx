import * as React from "react";

export interface FormVerifikasiPasporProps {}

const FormVerifikasiPaspor: React.FC<FormVerifikasiPasporProps> = ({}) => {
  return (
    <div className="h-screen bg-white relative">
      <div className="absolute top-0 w-full h-screen px-[16px] z-50">
        <div className="text-[24px] font-medium mt-[48px]">Verifikasi</div>
        <div className="text-[14px] mt-[18px] text-gray-500">
          Silakan verifikasi dengan nomor paspor Anda untuk pendaftaran sebagai
          jamaah
        </div>
      </div>
      <div className="absolute top-0 mt-[calc(35vh)] w-full px-[16px] z-50">
        <div className="rounded-md bg-white border border-gray-200 shadow-md w-full p-[12px] space-y-2">
          <div className="text-[12px]">No. Paspor</div>
          <input
            type="text"
            className="input input-bordered w-full text-[14px]"
            placeholder="Masukkan No. Paspor"
          />
          <a
            href="/verifikasi-paspor/konfirmasi"
            className="btn bg-primary text-white w-full"
          >
            Cek No. Paspor Saya
          </a>
          <button className="btn btn-outline text-primary w-full">
            Lewati
          </button>
        </div>
        <div className="mt-[12px] rounded-md bg-blue-50 p-[10px]">
          <div className="text-[14px] font-medium text-blue-400">
            Bukan jamaah haji?
          </div>
          <div className="text-[12px] font-medium text-gray-500">
            Atau lebih suka melewatkan langkah ini? Tidak masalah! Anda dapat
            menjelajahi Kawal Haji tanpa memasukkan nomor paspor Anda.
          </div>
        </div>
      </div>
      <img
        src="/icons/background_header_passport_verification.svg"
        className="object-cover w-full"
        alt="Verifikasi Paspor"
      />
    </div>
  );
};

export default FormVerifikasiPaspor;

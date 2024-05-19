import * as React from "react";

export interface KonfirmasiProps {}

const Konfirmasi: React.FC<KonfirmasiProps> = ({}) => {
  return (
    <div className="h-screen bg-white relative">
      <div className="absolute top-0 w-full h-screen px-[16px] z-50">
        <div className="text-[24px] font-medium mt-[48px]">
          Konfirimasi Data Anda
        </div>
        <div className="text-[14px] mt-[18px] text-gray-500">
          Mohon periksa detail pribadi Anda di bawah ini dan pastikan semuanya
          benar sebelum melanjutkan.
        </div>
      </div>
      <div className="absolute top-0 mt-[calc(35vh)] w-full px-[16px] z-50">
        <div className="rounded-md bg-white border border-gray-200 shadow-md w-full p-[12px] space-y-2">
          <div className="text-[18px] font-bold">Carlos Sainz</div>
          <div className="grid grid-cols-3 gap-2 text-[12px]">
            <div>
              <div className="font-medium">No. Paspor</div>
              <div>A1234567</div>
            </div>
            <div>
              <div className="font-medium">No. Haji</div>
              <div>53566HJ35</div>
            </div>
            <div>
              <div className="font-medium">No. Kloter</div>
              <div>HM887JK</div>
            </div>
          </div>
          <div className="text-[12px]">
            <div className="font-medium">Lokasi Hotel</div>
            <div>Hotel Nusa Dua</div>
          </div>
          <div className="pt-2">
            <button className="btn bg-primary text-white w-full">
              Konfirmasi
            </button>
          </div>
          <button className="btn btn-outline text-primary w-full">
            Kembali
          </button>
        </div>
        <div className="mt-[12px] rounded-md bg-blue-50 p-[10px]">
          <div className="text-[14px] font-medium text-blue-400">
            Salah memasukkan no.paspor?
          </div>
          <div className="text-[12px] font-medium text-gray-500">
            Jika Anda salah memasukkan nomor paspor dan data yang ditampilkan
            tidak sesuai dengan data diri Anda, silakan tekan tombol{" "}
            <strong>Kembali</strong>
            dan masukkan ulang nomor paspor Anda.
          </div>
        </div>
      </div>
      <img
        src="/icons/background_confirmation_passport_verification.svg"
        className="object-cover w-full"
        alt="Verifikasi"
      />
    </div>
  );
};

export default Konfirmasi;

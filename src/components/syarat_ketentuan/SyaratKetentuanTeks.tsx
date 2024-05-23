import * as React from "react";

export interface SyaratKetentuanTeksProps {}

const SyaratKetentuanTeks: React.FC<SyaratKetentuanTeksProps> = ({}) => {
  return (
    <>
      <h3 className="font-medium text-[16px]">Pendahuluan</h3>
      <p className="text-[14px]">
        Aplikasi “Kawal Haji” ini disediakan untuk jamaah haji Indonesia sebagai
        wadah pelaporan kelancaran dan penanganan permasalahan haji.
      </p>
      <h3 className="font-medium text-[16px] mt-[8px]">Definisi Pengguna</h3>

      <p className="text-[14px]">
        Aplikasi “Kawal Haji” ini bebas digunakan oleh jamaah haji Indonesia,
        keluarga yang dikuasai oleh jamaah terdaftar, dan petugas haji.
      </p>

      <h2 className="font-medium text-[16px] mt-[8px]">Ketentuan Penggunaan</h2>

      <p className="text-[14px]">
        Aplikasi “Kawal Haji” ini semata-mata bertujuan melancarkan keperluan
        jamaah haji Indonesia, memastikan kelancaran serta penanganan masalah
        yang dihadapi. Aplikasi ini tidak untuk disalahgunakan di luar
        kepentingan jamaah haji, tidak untuk hal-hal yang tidak sepatutnya
        apalagi yang menyalahi ajaran agama Islam terutama kesantunan. Informasi
        dan data yang disediakan di aplikasi ini tidak untuk disalahgunakan di
        luar kepentingan jamaah haji Indonesia.
      </p>

      <p className="text-[14px]">+Location Tracking</p>
    </>
  );
};

export default SyaratKetentuanTeks;

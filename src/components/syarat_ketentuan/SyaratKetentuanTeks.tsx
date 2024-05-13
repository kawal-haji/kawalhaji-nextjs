import * as React from "react";

export interface SyaratKetentuanTeksProps {}

const SyaratKetentuanTeks: React.FC<SyaratKetentuanTeksProps> = ({}) => {
  return (
    <>
      <h3 className="font-medium text-[16px]">1. Pengenalan</h3>
      <p className="text-[14px]">
        Aplikasi Kawal Haji adalah aplikasi yang membantu pengguna dalam
        memantau dan mengatur perjalanan haji mereka. Dengan menggunakan
        aplikasi ini, pengguna menyetujui syarat dan ketentuan berikut.
      </p>
      <h3 className="font-medium text-[16px] mt-[8px]">
        2. Penggunaan Aplikasi
      </h3>
      <ul className="text-[14px]">
        <li>
          Pengguna harus berusia minimal 18 tahun atau mendapatkan izin dari
          orang tua atau wali jika berusia di bawah 18 tahun.
        </li>
        <li>
          Pengguna bertanggung jawab atas penggunaan aplikasi ini sesuai dengan
          hukum yang berlaku.
        </li>
        <li>
          Pengguna hanya dapat menggunakan aplikasi ini untuk tujuan pribadi,
          non-komersial, dan dalam batas-batas yang ditetapkan oleh pengembang.
        </li>
      </ul>
    </>
  );
};

export default SyaratKetentuanTeks;

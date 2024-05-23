import * as React from "react";

export interface KebijakanPrivasiTextProps {}

const KebijakanPrivasiText: React.FC<KebijakanPrivasiTextProps> = ({}) => {
  return (
    <>
      <h3 className="font-medium text-[16px]">Pengumpulan Informasi</h3>
      <p className="text-[14px]">
        Aplikasi “Kawal Haji” dalam menjalankan fungsinya mungkin memerlukan
        informasi pengguna sebagai berikut, sebagian atau seluruhnya:
      </p>
      <ul className="list-disc text-[14px] ml-4">
        <li>Alamat email</li>
        <li>Nama pengguna</li>
        <li>
          Nomor paspor pengguna yang terdaftar sebagai jamaah atau petugas haji
        </li>
        <li>Lokasi sesuai aplikasi</li>
        <li>
          Data-data yang diperlukan sesuai keperluan pelaporan kelancaran dan
          penanganan masalah haji
        </li>
      </ul>
      <h3 className="font-medium text-[16px] mt-[8px]">Penggunaan Informasi</h3>

      <p className="text-[14px]">
        Informasi tersebut di atas dipergunakan hanya untuk kepentingan
        kelancaran prosesi haji dan penanganan masalah-masalah jamaah haji
        Indonesia.
      </p>

      <h2 className="font-medium text-[16px] mt-[8px]">Perlindungan Data</h2>

      <p className="text-[14px]">
        Data pribadi yang dipergunakan dalam aplikasi ini disimpan dan diamankan
        standard teknologi terkini.
      </p>

      <h2 className="font-medium text-[16px] mt-[8px]">
        Pengungkapan kepada Pihak Ketiga
      </h2>

      <p className="text-[14px]">
        Data pribadi yang dipergunakan dalam aplikasi ini hanya boleh
        diungkapkan ke pihak ketiga apabila berkepentingan dalam memastikan
        kelancaran dan penanganan masalah jamaah haji Indonesia.
      </p>
    </>
  );
};

export default KebijakanPrivasiText;

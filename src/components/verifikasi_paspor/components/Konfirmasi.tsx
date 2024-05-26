import { InquiryJamaahResponse } from "@/apis/user/getInquiryUserJamaah";
import { useVerifyUserJamaah } from "@/hooks/user/useVerifyUserJamaah";
import * as React from "react";

export interface KonfirmasiProps {
  inquiryJamaahResponse: InquiryJamaahResponse;
  setInquiryJamaahResponse: React.Dispatch<
    React.SetStateAction<InquiryJamaahResponse | undefined>
  >;
}

const Konfirmasi: React.FC<KonfirmasiProps> = ({
  inquiryJamaahResponse,
  setInquiryJamaahResponse,
}) => {
  const jamaah = inquiryJamaahResponse.jamaah;

  const { mutate: verify, isPending: isLoadingVerify } = useVerifyUserJamaah();
  const handleVerify = async () => {
    await verify(inquiryJamaahResponse);
  };

  return (
    <div className="h-screen bg-white relative">
      <div className="absolute top-0 w-full h-screen px-[16px] z-50">
        <div className="text-[24px] font-medium mt-[48px]">
          Konfirmasi Data Anda
        </div>
        <div className="text-[14px] mt-[18px] text-gray-500">
          Mohon periksa detail pribadi Anda di bawah ini dan pastikan semuanya
          benar sebelum melanjutkan.
        </div>
      </div>
      <div className="absolute top-0 mt-[calc(30vh)] w-full px-[16px] md:px-[24px] pb-[100px] z-50">
        <div className="rounded-md bg-white border border-gray-200 shadow-md w-full p-[12px] space-y-2 md:space-y-4">
          <div className="text-[18px] md:text-[20px] font-bold">
            {jamaah?.namaPaspor}
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-[12px] md:text-[14px]">
            <div>
              <div className="font-medium">No. Paspor</div>
              <div className="md:text-[16px]">{jamaah?.noPaspor || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Porsi</div>
              <div className="md:text-[16px]">{jamaah?.noPorsi || "-"}</div>
            </div>
            <div>
              <div className="font-medium">EMB</div>
              <div className="md:text-[16px]">{jamaah?.emb || "-"}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4 text-[12px] md:text-[14px]">
            <div>
              <div className="font-medium">Kloter</div>
              <div className="md:text-[16px]">{jamaah?.kloter || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Maktab</div>
              <div className="md:text-[16px]">{jamaah?.noMaktab || "-"}</div>
            </div>
            <div>
              <div className="font-medium">Wilayah Makkah</div>
              <div className="md:text-[16px]">
                {jamaah?.wilayahMakkah || "-"}
              </div>
            </div>
            <div>
              <div className="font-medium">No. Rumah Makkah</div>
              <div className="md:text-[16px]">
                {jamaah?.noRumahMakkah || "-"}
              </div>
            </div>
            <div>
              <div className="font-medium">Gedung</div>
              <div className="md:text-[16px]">{jamaah?.gedung || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Lantai</div>
              <div className="md:text-[16px]">{jamaah?.nomorLantai || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Kamar</div>
              <div className="md:text-[16px]">{jamaah?.nomorKamar || "-"}</div>
            </div>
            <div>
              <div className="font-medium">Nama Hotel</div>
              <div className="md:text-[16px]">{jamaah?.namaHotel || "-"}</div>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="btn bg-primary text-white w-full"
              onClick={handleVerify}
              disabled={isLoadingVerify}
            >
              {isLoadingVerify && <span className="loading loading-spinner" />}
              Konfirmasi
            </button>
          </div>
          <button
            className="btn btn-outline text-primary w-full"
            onClick={() => setInquiryJamaahResponse(undefined)}
          >
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

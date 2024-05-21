import { InquiryJamaahResponse } from "@/apis/user/getInquiryUserJamaah";
import { useVerifyUserJamaah } from "@/hooks/user/useVerifyUserJamaah";
import { URL_SSO_GOOGLE } from "@/lib/constants";
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
    await verify(inquiryJamaahResponse, {
      onSuccess: () => {
        window.location.href = URL_SSO_GOOGLE;
      },
    });
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
      <div className="absolute top-0 mt-[calc(30vh)] w-full px-[16px] pb-[100px] z-50">
        <div className="rounded-md bg-white border border-gray-200 shadow-md w-full p-[12px] space-y-2">
          <div className="text-[18px] font-bold">{jamaah?.namaPaspor}</div>
          <div className="grid grid-cols-3 gap-2 text-[12px]">
            <div>
              <div className="font-medium">No. Paspor</div>
              <div>{jamaah?.noPaspor || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Porsi</div>
              <div>{jamaah?.noPorsi || "-"}</div>
            </div>
            <div>
              <div className="font-medium">EMB</div>
              <div>{jamaah?.emb || "-"}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[12px]">
            <div>
              <div className="font-medium">Kloter</div>
              <div>{jamaah?.kloter || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Maktab</div>
              <div>{jamaah?.noMaktab || "-"}</div>
            </div>
            <div>
              <div className="font-medium">Wilayah Makkah</div>
              <div>{jamaah?.wilayahMakkah || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Rumah Makkah</div>
              <div>{jamaah?.noRumahMakkah || "-"}</div>
            </div>
            <div>
              <div className="font-medium">Gedung</div>
              <div>{jamaah?.gedung || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Lantai</div>
              <div>{jamaah?.nomorLantai || "-"}</div>
            </div>
            <div>
              <div className="font-medium">No. Kamar</div>
              <div>{jamaah?.nomorKamar || "-"}</div>
            </div>
            <div>
              <div className="font-medium">Nama Hotel</div>
              <div>{jamaah?.namaHotel || "-"}</div>
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

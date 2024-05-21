import {
  InquiryJamaahResponse,
  InquiryJamaahResponseError,
} from "@/apis/user/getInquiryUserJamaah";
import { patchVerifyUserJamaah } from "@/apis/user/patchVerifyUserJamaah";
import { useToast } from "@/hooks/useToast";
import { URL_SSO_GOOGLE } from "@/lib/constants";
import { User } from "@/types/auth";
import { ToastType } from "@/types/toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useVerifyUserJamaah = () => {
  const { showToast } = useToast();

  return useMutation<
    User | undefined,
    AxiosError<InquiryJamaahResponseError>,
    InquiryJamaahResponse
  >({
    mutationFn: patchVerifyUserJamaah,
    onSuccess: async () => {
      showToast(ToastType.Success, "Berhasil verifikasi user");

      setTimeout(() => {
        window.location.href = URL_SSO_GOOGLE;
      }, 1500);
    },
    onError: (data) => {
      showToast(
        ToastType.Error,
        data.response?.data.debug?.message || "Terjadi kesalahan"
      );
    },
  });
};

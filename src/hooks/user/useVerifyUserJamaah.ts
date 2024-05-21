import {
  InquiryJamaahResponse,
  InquiryJamaahResponseError,
} from "@/apis/user/getInquiryUserJamaah";
import { patchVerifyUserJamaah } from "@/apis/user/patchVerifyUserJamaah";
import { useToast } from "@/hooks/useToast";
import { ToastType } from "@/types/toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useVerifyUserJamaah = () => {
  const { showToast } = useToast();

  return useMutation<
    string | undefined,
    AxiosError<InquiryJamaahResponseError>,
    InquiryJamaahResponse
  >({
    mutationFn: patchVerifyUserJamaah,
    onError: (data) => {
      showToast(
        ToastType.Error,
        data.response?.data.debug?.message || "Terjadi kesalahan"
      );
    },
  });
};

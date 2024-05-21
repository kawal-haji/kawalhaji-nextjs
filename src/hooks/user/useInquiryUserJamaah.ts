import {
  GetInquiryUserJamaahArgs,
  InquiryJamaahResponse,
  InquiryJamaahResponseError,
  getInquiryUserJamaah,
} from "@/apis/user/getInquiryUserJamaah";
import { useToast } from "@/hooks/useToast";
import { Response } from "@/types/Response";
import { ToastType } from "@/types/toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useInquiryUserJamaah = () => {
  const { showToast } = useToast();

  return useMutation<
    InquiryJamaahResponse | undefined,
    AxiosError<Response<InquiryJamaahResponseError>>,
    GetInquiryUserJamaahArgs
  >({
    mutationFn: getInquiryUserJamaah,
    onError: (data) => {
      showToast(
        ToastType.Error,
        data.response?.data.data?.debug?.message ?? "Terjadi kesalahan"
      );
    },
  });
};

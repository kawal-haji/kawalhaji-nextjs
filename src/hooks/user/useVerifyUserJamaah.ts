import {
  InquiryJamaahResponse,
  InquiryJamaahResponseError,
} from "@/apis/user/getInquiryUserJamaah";
import { patchVerifyUserJamaah } from "@/apis/user/patchVerifyUserJamaah";
import { useToast } from "@/hooks/useToast";
import { User } from "@/types/auth";
import { ToastType } from "@/types/toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const useVerifyUserJamaah = () => {
  const { showToast } = useToast();
  const { data: dataSession } = useSession();
  const router = useRouter();

  return useMutation<
    User | undefined,
    AxiosError<InquiryJamaahResponseError>,
    InquiryJamaahResponse
  >({
    mutationFn: patchVerifyUserJamaah,
    onSuccess: async (data) => {
      if (data) {
        showToast(ToastType.Success, "Berhasil verifikasi user");
      }
    },
    onError: (data) => {
      showToast(
        ToastType.Error,
        data.response?.data.debug?.message || "Terjadi kesalahan"
      );
    },
  });
};

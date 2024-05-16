import {
  UploadFileURLArgs,
  getUploadFileURL,
} from "@/apis/asset/getUploadFileURL";
import { UploadAttachment } from "@/types/attachment";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useUploadFileURL = () => {
  const mutation = useMutation<
    UploadAttachment | undefined,
    AxiosError,
    UploadFileURLArgs
  >({
    mutationFn: getUploadFileURL,
  });

  return {
    ...mutation,
  };
};

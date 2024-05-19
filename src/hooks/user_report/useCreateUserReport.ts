import { postUserReport } from "@/apis/user_report/postUserReport";
import { useToast } from "@/hooks/useToast";
import { Report, ReportForm } from "@/types/report/report";
import { ToastType } from "@/types/toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreateUserReport = () => {
  const { showToast } = useToast();

  const mutation = useMutation<Report | undefined, AxiosError, ReportForm>({
    mutationFn: postUserReport,
    onSuccess: () => showToast(ToastType.Success, "Laporan berhasil dibuat"),
    onError: () => showToast(ToastType.Error, "Gagal membuat laporan"),
  });

  return {
    ...mutation,
  };
};

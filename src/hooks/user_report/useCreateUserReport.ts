import { postUserReport } from "@/apis/user_report/postUserReport";
import { Report, ReportForm } from "@/types/report/report";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreateUserReport = () => {
  const mutation = useMutation<Report | undefined, AxiosError, ReportForm>({
    mutationFn: postUserReport,
  });

  return {
    ...mutation,
  };
};

import {
  UserReportStatusArgs,
  patchUserReportStatus,
} from "@/apis/user_report/patchUserReportStatus";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useChangeReportStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    Report | undefined,
    AxiosError,
    UserReportStatusArgs
  >({
    mutationFn: patchUserReportStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/users/reports/detail"],
      });
    },
  });

  return {
    ...mutation,
  };
};

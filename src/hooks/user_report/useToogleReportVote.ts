import {
  ToggleReportVoteArgs,
  ToggleReportVoteResponse,
  postToggleReportVote,
} from "@/apis/user_report/postToggleReportVote";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useToogleReportVote = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ToggleReportVoteResponse | undefined,
    AxiosError,
    ToggleReportVoteArgs
  >({
    mutationFn: postToggleReportVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["/users/reports/detail"],
      });
      queryClient.invalidateQueries({
        queryKey: [`/users/reports/${data?.xid}/vote`],
      });
    },
  });

  return {
    ...mutation,
  };
};

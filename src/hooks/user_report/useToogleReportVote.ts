import {
  ToggleReportVoteArgs,
  postToggleReportVote,
} from "@/apis/user_report/postToggleReportVote";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useToogleReportVote = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    string | undefined,
    AxiosError,
    ToggleReportVoteArgs
  >({
    mutationFn: postToggleReportVote,
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

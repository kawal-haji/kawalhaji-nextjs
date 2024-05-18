import {
  ToggleReportVoteArgs,
  ToggleReportVoteResponse,
  postToggleReportVote,
} from "@/apis/user_report/postToggleReportVote";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useToogleReportVote = () => {
  const mutation = useMutation<
    ToggleReportVoteResponse | undefined,
    AxiosError,
    ToggleReportVoteArgs
  >({
    mutationFn: postToggleReportVote,
  });

  return {
    ...mutation,
  };
};

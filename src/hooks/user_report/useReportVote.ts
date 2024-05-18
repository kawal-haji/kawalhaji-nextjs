import {
  GetUserReportVoteArgs,
  getUserReportVote,
} from "@/apis/user_report/getUserReportVote";
import { useQuery } from "@tanstack/react-query";

export const useReportVote = (parameters: GetUserReportVoteArgs) => {
  return useQuery({
    queryKey: [`/users/reports/${parameters.xid}/vote`],
    queryFn: () => getUserReportVote(parameters),
  });
};

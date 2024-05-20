import {
  GetUserReportVoteArgs,
  getUserReportVote,
} from "@/apis/user_report/getUserReportVote";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useReportVote = (parameters: GetUserReportVoteArgs) => {
  const { data: dataSession } = useSession();

  return useQuery({
    queryKey: [`/users/reports/${parameters.xid}/vote`],
    queryFn: () => getUserReportVote(parameters),
    enabled: !!dataSession?.user?.xid,
  });
};

import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

interface VoteResponse {
  vote: boolean;
}

type APIResponse = Response<VoteResponse>;

export interface GetUserReportVoteArgs {
  xid: string;
}

export const getUserReportVote = async (args: GetUserReportVoteArgs) => {
  const result = await apiClient.get<APIResponse>(
    `/users/reports/${args.xid}/vote`
  );

  return !!result.data.data;
};

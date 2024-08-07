import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

export interface ToggleReportVoteResponse {
  vote: boolean;
}

type APIResponse = Response<ToggleReportVoteResponse>;

export interface ToggleReportVoteArgs {
  xid: string;
}

export const postToggleReportVote = async (args: ToggleReportVoteArgs) => {
  const result = await apiClient.post<APIResponse>(
    `/users/reports/${args.xid}/vote`
  );

  return result.data.data;
};

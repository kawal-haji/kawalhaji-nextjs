import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

export interface ToggleReportVoteResponse {
  xid: string;
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

  if (!result.data.data) return;

  const data: ToggleReportVoteResponse = { ...result.data.data };
  data.xid = args.xid;

  return data;
};

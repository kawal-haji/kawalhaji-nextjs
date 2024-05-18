import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

type APIResponse = Response<string>;

export interface ToggleReportVoteArgs {
  xid: string;
}

export const postToggleReportVote = async (args: ToggleReportVoteArgs) => {
  await apiClient.post<APIResponse>(`/users/reports/${args.xid}/vote`);

  return args.xid;
};

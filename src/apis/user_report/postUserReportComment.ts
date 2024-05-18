import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

type APIResponse = Response<string>;

export interface UserReportCommentArgs {
  xid: string;
  komentar: string;
}

export const postUserReportComment = async (args: UserReportCommentArgs) => {
  const result = await apiClient.post<APIResponse>(
    `/users/reports/${args.xid}/comments`,
    {
      message: args.komentar,
    }
  );

  return result.data.data;
};

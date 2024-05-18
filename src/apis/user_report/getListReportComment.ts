import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { ReportComment } from "@/types/report/report";

interface ReportCommentResponse {
  items: ReportComment[];
  metadata: {
    count: string;
    limit: string;
    skip: string;
    sortBy: string;
  };
}

type APIResponse = Response<ReportCommentResponse>;

export interface GetListReportCommentArgs {
  xid: string;
  limit: number;
  skip: number;
}

export const getListReportComment = async (args: GetListReportCommentArgs) => {
  const result = await apiClient.get<APIResponse>(
    `/users/reports/${args.xid}/comments`,
    {
      params: {
        limit: args.limit,
        skip: args.skip,
      },
    }
  );

  return result.data.data?.items ?? [];
};

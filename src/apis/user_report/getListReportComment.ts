import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Report } from "@/types/report/report";

type APIResponse = Response<Report>;

interface GetListReportCommentArgs {
  xid: string;
}

export const getListReportComment = async (args: GetListReportCommentArgs) => {
  const result = await apiClient.get<APIResponse>(
    `/users/reports/${args.xid}/comments`
  );

  return result.data.data;
};

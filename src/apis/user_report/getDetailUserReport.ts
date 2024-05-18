import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Report } from "@/types/report/report";

type APIResponse = Response<Report>;

export interface GetDetailUserReportArgs {
  xid: string;
}

export const getDetailUserReport = async (args: GetDetailUserReportArgs) => {
  const result = await apiClient.get<APIResponse>(`/users/reports/${args.xid}`);

  return result.data.data;
};

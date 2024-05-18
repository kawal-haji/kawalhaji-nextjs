import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

type APIResponse = Response<Report>;

export enum ReportStatusEnum {
  ACTIVE = 2,
  RESOLVED = 3,
}

export interface UserReportStatusArgs {
  xid: string;
  version: string;
  status: ReportStatusEnum;
}

export const patchUserReportStatus = async (args: UserReportStatusArgs) => {
  const result = await apiClient.patch<APIResponse>(
    `/users/reports/${args.xid}/status`,
    {
      status: {
        id: args.status,
      },
      content: {
        notes: "",
      },
      version: args.version,
    }
  );

  return result.data.data;
};

import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Report } from "@/types/report/report";

interface ReportResponse {
  items: Report[];
  metadata: {
    count: string;
    limit: string;
    skip: string;
    sortBy: string;
  };
}

export interface PaginationReportQueryParams {
  limit: number;
  skip: number;
  sortBy: string;
  filters: {
    categoryId: number | string;
    title: string;
    statusId: number | string;
    isOwned: number | string;
  };
}

type APIResponse = Response<ReportResponse>;

export const getListUserReport = async (args: PaginationReportQueryParams) => {
  const result = await apiClient.get<APIResponse>(`/users/reports`, {
    params: args,
  });

  return result.data.data?.items ?? [];
};

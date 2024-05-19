import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Report, ReportStatusEnum } from "@/types/report/report";

interface ReportResponse {
  items: Report[];
  metadata: {
    count: string;
    limit: string;
    skip: string;
    sortBy: string;
  };
}

export enum SortByUserReport {
  LATEST = "latest",
  TITLE_ASC = "title-asc",
  MOST_VOTED = "most-voted",
  MOST_COMMENTED = "most-commented",
  LAST_UPDATED = "last-updated",
}

export interface PaginationReportQueryParams {
  limit: number;
  skip: number;
  sortBy: SortByUserReport;
  filters: PaginationReportFilter;
}

export interface PaginationReportFilter {
  categoryId: number | "";
  title: string;
  statusId: ReportStatusEnum | "";
  isOwned: boolean;
}

type APIResponse = Response<ReportResponse>;

export const getListUserReport = async (args: PaginationReportQueryParams) => {
  const result = await apiClient.get<APIResponse>(`/users/reports`, {
    params: args,
  });

  return result.data.data?.items ?? [];
};

import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Report, ReportForm } from "@/types/report/report";

type APIResponse = Response<Report>;

export const postUserReport = async (args: ReportForm) => {
  const result = await apiClient.post<APIResponse>(`/users/reports`, args);

  return result.data.data;
};

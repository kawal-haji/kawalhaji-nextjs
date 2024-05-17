import { useQuery } from "@tanstack/react-query";

import {
  PaginationReportQueryParams,
  getListUserReport,
} from "@/apis/user_report/getListUserReport";

export const useListUserReport = (parameters: PaginationReportQueryParams) => {
  return useQuery({
    queryKey: ["/users/reports", parameters],
    queryFn: () => getListUserReport(parameters),
  });
};

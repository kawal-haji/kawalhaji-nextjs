import {
  GetDetailUserReportArgs,
  getDetailUserReport,
} from "@/apis/user_report/getDetailUserReport";
import { useQuery } from "@tanstack/react-query";

export const useDetailReport = (parameters: GetDetailUserReportArgs) => {
  return useQuery({
    queryKey: ["/users/reports/detail", parameters],
    queryFn: () => getDetailUserReport(parameters),
  });
};

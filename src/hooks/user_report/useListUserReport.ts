import { useQuery } from "@tanstack/react-query";

import {
  PaginationReportQueryParams,
  getListUserReport,
} from "@/apis/user_report/getListUserReport";
import { Report } from "@/types/report/report";
import React from "react";

export const useListUserReport = (filterArgs: PaginationReportQueryParams) => {
  const [parameters, setParameters] =
    React.useState<PaginationReportQueryParams>(filterArgs);
  const [listUserReport, setListUserReport] = React.useState<Report[]>([]);
  const [isLastUserReport, setIsLastUserReport] =
    React.useState<boolean>(false);

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["/users/reports", parameters],
    queryFn: () => getListUserReport(parameters),
  });

  React.useEffect(() => {
    if (!isLoading && !!data) {
      const combinedData = [...listUserReport];
      data.forEach((item) => {
        if (!combinedData.find((i) => i.xid === item.xid)) {
          combinedData.push(item);
        }
      });
      setListUserReport(combinedData);
      setIsLastUserReport(data.length < parameters.limit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data, parameters.limit]);

  const handleLoadMore = () => {
    setParameters((prev) => ({
      ...prev,
      skip: prev.skip + prev.limit,
    }));
  };

  return { listUserReport, isLoading, isLastUserReport, handleLoadMore };
};

import { useQuery } from "@tanstack/react-query";

import {
  GetListReportCommentArgs,
  getListReportComment,
} from "@/apis/user_report/getListReportComment";
import { ReportComment } from "@/types/report/report";
import React from "react";

interface UseListReportComment {
  xid: string;
}

export const useListReportComment = ({ xid }: UseListReportComment) => {
  const [parameters, setParameters] = React.useState<GetListReportCommentArgs>({
    xid,
    limit: 5,
    skip: 0,
  });
  const [listComment, setListComment] = React.useState<ReportComment[]>([]);
  const [isLastComment, setIsLastComment] = React.useState<boolean>(false);

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["/users/reports/comment", parameters],
    queryFn: () => getListReportComment(parameters),
  });

  React.useEffect(() => {
    if (!isLoading && !!data) {
      const combinedData = [...listComment];
      data.forEach((item) => {
        if (!combinedData.find((i) => i.id === item.id)) {
          combinedData.push(item);
        }
      });

      // urutkan berdasarkan tanggal terbaru
      combinedData.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        return 0;
      });

      setListComment(combinedData);
      setIsLastComment(data.length < parameters.limit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data, parameters.limit]);

  const handleNextPage = () => {
    setParameters({
      ...parameters,
      skip: parameters.skip + parameters.limit,
    });
  };

  return { listComment, isLoading, isLastComment, handleNextPage };
};

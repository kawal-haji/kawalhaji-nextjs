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
  const [listComent, setListComent] = React.useState<ReportComment[]>([]);
  const [isLastComment, setIsLastComment] = React.useState<boolean>(false);

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["/users/reports/comment", parameters],
    queryFn: () => getListReportComment(parameters),
  });

  React.useEffect(() => {
    if (!isLoading && !!data) {
      const combinedData = [...listComent];
      data.forEach((item) => {
        if (!combinedData.find((i) => i.id === item.id)) {
          combinedData.push(item);
        }
      });
      setListComent(combinedData);
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

  return { listComent, isLoading, isLastComment, handleNextPage };
};

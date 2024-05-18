import {
  UserReportCommentArgs,
  postUserReportComment,
} from "@/apis/user_report/postUserReportComment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useSendComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    string | undefined,
    AxiosError,
    UserReportCommentArgs
  >({
    mutationFn: postUserReportComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/users/reports/comment"],
      });
      queryClient.invalidateQueries({
        queryKey: ["/users/reports/detail"],
      });
    },
  });

  return {
    ...mutation,
  };
};

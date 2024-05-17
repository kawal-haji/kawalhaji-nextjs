import { PaginationReportQueryParams } from "@/apis/user_report/getListUserReport";
import { atom } from "jotai";

export const initialPaginationReportQueryParams: PaginationReportQueryParams = {
  limit: 10,
  skip: 0,
  sortBy: "",
  filters: {
    categoryId: "",
    title: "",
    statusId: "",
    isOwned: "",
  },
};

export const PaginationReportQueryParamsAtom =
  atom<PaginationReportQueryParams>(initialPaginationReportQueryParams);

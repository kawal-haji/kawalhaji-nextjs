import { Alert, ErrorAlert } from "@/types/alert";
import { AxiosError } from "axios";

export interface Response<
  R = Record<string, string>,
  M = Record<string, string>
> {
  alert: Alert;
  data?: R;
  meta?: M;
}

export interface ErrorResponse {
  alert?: Partial<ErrorAlert>;
}

export type AxiosErrorResponse = AxiosError<ErrorResponse>;

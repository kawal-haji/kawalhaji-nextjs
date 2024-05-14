import { ErrorAlert } from "@/types/alert";
import { AxiosError } from "axios";

export interface Response<R = Record<string, string>> {
  success: boolean;
  code: string;
  message: string;
  data?: R;
}

export interface ErrorResponse {
  alert?: Partial<ErrorAlert>;
}

export type AxiosErrorResponse = AxiosError<ErrorResponse>;

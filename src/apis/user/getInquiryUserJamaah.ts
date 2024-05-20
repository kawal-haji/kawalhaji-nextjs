import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Jamaah } from "@/types/jamaah";

export interface InquiryJamaahResponse {
  jamaah?: Jamaah;
  requestedAt?: string;
  signature?: string;
}

export interface InquiryJamaahResponseError {
  debug?: {
    message: string;
  };
}

type APIResponse = Response<InquiryJamaahResponse>;

export interface GetInquiryUserJamaahArgs {
  passportNumber: string;
}

export const getInquiryUserJamaah = async (args: GetInquiryUserJamaahArgs) => {
  const result = await apiClient.get<APIResponse>(`/users/me/jamaah/inquiry`, {
    params: args,
  });

  return result.data.data;
};

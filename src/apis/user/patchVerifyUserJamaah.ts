import { apiClient } from "@/apis/api-client";
import { InquiryJamaahResponse } from "@/apis/user/getInquiryUserJamaah";

import { Response } from "@/types/Response";

type APIResponse = Response<string>;

export const patchVerifyUserJamaah = async (args: InquiryJamaahResponse) => {
  const result = await apiClient.patch<APIResponse>(
    `/users/me/jamaah/inquiry`,
    args
  );

  return result.data.data;
};

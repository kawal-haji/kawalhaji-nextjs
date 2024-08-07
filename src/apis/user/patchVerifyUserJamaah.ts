import { apiClient } from "@/apis/api-client";
import { InquiryJamaahResponse } from "@/apis/user/getInquiryUserJamaah";

import { Response } from "@/types/Response";
import { User } from "@/types/auth";

type APIResponse = Response<User>;

export const patchVerifyUserJamaah = async (args: InquiryJamaahResponse) => {
  const result = await apiClient.patch<APIResponse>(
    `/users/me/jamaah/verify`,
    args
  );

  return result.data.data;
};

import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";

type APIResponse = Response<string>;

export const deleteUserSession = async () => {
  const result = await apiClient.delete<APIResponse>(`/users/me/sessions`);

  return !!result.data.data;
};

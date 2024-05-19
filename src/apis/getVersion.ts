import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { Version } from "@/types/version";

type APIResponse = Response<Version>;

export const getVersion = async () => {
  const result = await apiClient.get<APIResponse>(``);

  return result.data.data;
};

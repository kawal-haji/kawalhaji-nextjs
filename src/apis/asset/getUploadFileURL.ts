import { apiClient } from "@/apis/api-client";

import { Response } from "@/types/Response";
import { AssetType, UploadAttachment } from "@/types/attachment";
import axios from "axios";

type APIResponse = Response<UploadAttachment>;

export interface UploadFileURLArgs {
  assetType: AssetType;
  fileName: string;
  file: File;
}

export const getUploadFileURL = async (args: UploadFileURLArgs) => {
  const urlUploadInformation = await apiClient.get<APIResponse>(
    `/assets/upload-url`,
    {
      params: {
        assetType: args.assetType,
        fileName: args.fileName,
      },
    }
  );

  if (!urlUploadInformation.data.data) {
    throw new Error("Failed to get upload URL");
  }

  await axios.put(urlUploadInformation.data.data.url, args.file, {
    headers: {
      "Content-Type": args.file.type,
    },
  });

  urlUploadInformation.data.data.file = args.file;

  return urlUploadInformation.data.data;
};

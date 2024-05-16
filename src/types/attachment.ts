export interface Attachment {
  fileType: FileType;
  file: FileDetail;
}

export interface FileType {
  id: number;
}

export interface FileDetail {
  fileName: string;
}

export interface UploadAttachment {
  httpMethod: string;
  url: string;
  fileName: string;
  file?: File;
}

export enum AssetType {
  USER_AVATAR = 1,
  USER_REPORT_ATTACHMENT = 3,
}

export interface Attachment {
  fileType: FileType;
  file: FileDetail;
}

export interface FileType {
  id: FileTypeEmum;
  name?: string;
}

export interface FileDetail {
  fileName: string;
}

export interface UploadAttachment {
  httpMethod: string;
  url: string;
  fileName: string;
  isImage: boolean;
  file?: File;
}

export enum AssetType {
  USER_AVATAR = 1,
  USER_REPORT_ATTACHMENT = 3,
}

export enum FileTypeEmum {
  IMAGE = 1,
  VIDEO = 2,
}

export interface Attachment {
  fileType: FileType;
  file: File;
}

export interface FileType {
  id: number;
}

export interface File {
  fileName: string;
}

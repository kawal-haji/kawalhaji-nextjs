import { Attachment } from "@/types/attachment";
import { User } from "@/types/auth";
import { Location } from "@/types/location";
import { ReportCategory } from "@/types/report/category";

export interface ReportForm {
  category: ReportCategory;
  content: Content;
  location: Location;
}

export interface Content {
  title: string;
  description: string;
  attachments: Attachment[];
  notes?: string;
}

export interface Report {
  xid: string;
  user?: User;
  category: ReportCategory;
  content: Content;
  location: Location;
  status: StatusReport;
  upvoteCount: string;
  commentCount: string;
  createdAt: string;
  updatedAt: string;
  modifiedBy: User;
  version: string;
}

export interface StatusReport {
  id: number;
  name: string;
}

export interface ReportComment {
  id: string;
  message: string;
  parentId: string;
  user: User;
  status: StatusComment;
  createdAt: string;
}

export interface StatusComment {
  id: number;
  name: string;
}

export enum ReportStatusEnum {
  ACTIVE = 2,
  RESOLVED = 3,
  CLOSED = 4,
}

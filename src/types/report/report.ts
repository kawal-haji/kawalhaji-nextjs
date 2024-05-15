import { Attachment } from "@/types/attachment";
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
}

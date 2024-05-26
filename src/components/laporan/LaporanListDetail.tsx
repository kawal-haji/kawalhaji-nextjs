import ImagePreview from "@/components/image/ImagePreview";
import StatusLaporanText from "@/components/laporan/components/StatusLaporanText";
import VoteReport from "@/components/laporan/components/VoteReport";
import { formatHumanDayTime } from "@/lib/datetime";
import { reportCategories } from "@/types/report/category";
import { Report } from "@/types/report/report";
import Link from "next/link";
import * as React from "react";

export interface LaporanListDetailProps {
  report: Report;
}

const LaporanListDetail: React.FC<LaporanListDetailProps> = ({ report }) => {
  const iconCategory = reportCategories.find(
    (category) => category.id === report.category.id
  )?.iconText;

  return (
    <div>
      <div className="bg-white rounded-md px-[12px] pt-[12px]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1">
              <div className="text-[10px] md:text-[12px] font-medium truncate">
                {report.user?.fullName ?? "Anonim"}
              </div>
              {report.user?.verified && (
                <img
                  src="/icons/verified_flag.svg"
                  alt="verified"
                  className="w-[12px] h-[12px]"
                />
              )}
            </div>
            <div className="text-[10px] md:text-[12px] text-gray-500">
              {formatHumanDayTime(parseInt(report.createdAt))}
            </div>
          </div>
          <div className="rounded-full bg-green-100  px-2 md:px-3 py-1">
            <div className="flex items-center gap-1 md:gap-2">
              <img
                src={`/icons/${iconCategory}`}
                alt="more"
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              />
              <div className="text-[10px] md:text-[12px] text-green-500">
                {report.category.name}
              </div>
            </div>
          </div>
        </div>
        <Link href={`/laporan/${report.xid}`}>
          <div className="cursor-pointer">
            <div className="mt-[8px]">
              <div className="text-[14px] md:text-[16px] font-semibold hover:underline hover:text-blue-600">
                {report.content.title}
              </div>
              <div className="text-[12px] md:text-[14px] text-gray-500">
                {report.content.description}
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-[8px]">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {report.content.attachments.slice(0, 3).map((attachment, index) => (
              <ImagePreview key={index} attachment={attachment} />
            ))}
          </div>
        </div>
        <div className="mt-[8px]">
          <div className="flex items-center md:gap-2">
            <Link href={`/laporan/${report.xid}`}>
              <button className="btn btn-ghost text-[10px] md:text-[12px]">
                <img
                  src="/icons/comment.svg"
                  alt="Komentar"
                  className="w-[16px] h-[16px]"
                />
                {report.commentCount} Respon
              </button>
            </Link>
            <div className="mr-auto">
              <VoteReport xid={report.xid} count={Number(report.upvoteCount)} />
            </div>
            <StatusLaporanText status={report.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanListDetail;

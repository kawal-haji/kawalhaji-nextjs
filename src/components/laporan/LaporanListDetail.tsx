import { formatHumanDayTime } from "@/lib/datetime";
import { FileTypeEmum } from "@/types/attachment";
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
    <>
      <div className="bg-white rounded-md px-[12px] pt-[12px]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1">
              <div className="text-[10px] font-medium truncate">
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
            <div className="text-[10px] text-gray-500">
              {formatHumanDayTime(parseInt(report.createdAt))}
            </div>
          </div>
          <Link href={`/laporan/${report.xid}`}>
            <div className="rounded-full bg-green-100  px-2 py-1">
              <div className="flex items-center gap-1">
                <img
                  src={`/icons/${iconCategory}`}
                  alt="more"
                  className="w-[16px] h-[16px]"
                />
                <div className="text-[10px] text-green-500">
                  {report.category.name}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-[8px]">
          <div className="text-[14px] font-semibold">
            {report.content.title}
          </div>
          <div className="text-[12px] text-gray-500">
            {report.content.description}
          </div>
        </div>
        <div className="mt-[8px]">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
            {report.content.attachments.map((attachment, index) => (
              <>
                {attachment.fileType.id === FileTypeEmum.IMAGE ? (
                  <img
                    key={index}
                    src={attachment.file.url}
                    alt="like"
                    className="w-full rounded-md object-cover"
                  />
                ) : (
                  <div key={index} className="relative rounded-md">
                    <img
                      src={attachment.file.url}
                      alt="like"
                      className="w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center  rounded-md">
                      <img src="/icons/play.svg" alt="Play" />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="mt-[8px]">
          <div className="flex items-center">
            <button className="btn btn-ghost text-[10px]">
              <img
                src="/icons/comment.svg"
                alt="Komentar"
                className="w-[16px] h-[16px]"
              />
              {report.commentCount} Respon
            </button>
            <button className="btn btn-ghost btn-success text-green-600 text-[10px]">
              <img
                src="/icons/arrow_circle_up.svg"
                alt="Dukungan"
                className="w-[16px] h-[16px]"
              />
              {report.upvoteCount} Dukungan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanListDetail;

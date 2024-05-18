import ImagePreview from "@/components/image/ImagePreview";
import { useDetailReport } from "@/hooks/user_report/useDetailReport";
import { formatHumanDayTime } from "@/lib/datetime";
import { reportCategories } from "@/types/report/category";
import { Report } from "@/types/report/report";
import { useRouter } from "next/router";
import * as React from "react";

export interface LaporanListDetailProps {
  report: Report;
}

const LaporanListDetail: React.FC<LaporanListDetailProps> = ({ report }) => {
  const { setReport } = useDetailReport();
  const router = useRouter();
  const iconCategory = reportCategories.find(
    (category) => category.id === report.category.id
  )?.iconText;

  const handleOpenDetailUserReport = () => {
    setReport(report);
    router.push(`/laporan/${report.xid}`);
  };

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
        </div>
        <div className="cursor-pointer" onClick={handleOpenDetailUserReport}>
          <div className="mt-[8px]">
            <div className="text-[14px] font-semibold hover:underline hover:text-blue-600">
              {report.content.title}
            </div>
            <div className="text-[12px] text-gray-500">
              {report.content.description}
            </div>
          </div>
        </div>
        <div className="mt-[8px]">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
            {report.content.attachments.slice(0, 3).map((attachment, index) => (
              <ImagePreview key={index} attachment={attachment} />
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

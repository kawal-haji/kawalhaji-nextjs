import VoteReport from "@/components/laporan/components/VoteReport";
import { formatHumanDayTime } from "@/lib/datetime";
import { reportCategories } from "@/types/report/category";
import { Report } from "@/types/report/report";
import Link from "next/link";
import * as React from "react";

export interface LaporanSayaListDetailProps {
  report: Report;
}

const LaporanSayaListDetail: React.FC<LaporanSayaListDetailProps> = ({
  report,
}) => {
  const iconCategory = reportCategories.find(
    (category) => category.id === report.category.id
  )?.iconText;

  return (
    <>
      <div className="w-[275px]">
        <div className="bg-white rounded-md px-[12px] pt-[12px] w-[275px]">
          <Link href={`/laporan/${report.xid}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] text-gray-500">
                  {formatHumanDayTime(parseInt(report.createdAt))}
                </div>
                <div className="text-[12px] font-medium mt-[4px]">
                  {report.content.title}
                </div>
              </div>
              <img
                src={`/icons/${iconCategory}`}
                alt="more"
                className="w-[32px] h-[32px]"
              />
            </div>
          </Link>
          <div className="flex items-center">
            <Link href={`/laporan/${report.xid}`}>
              <button className="btn btn-ghost text-[10px]">
                <img
                  src="/icons/comment.svg"
                  alt="Komentar"
                  className="w-[16px] h-[16px]"
                />
                {report.commentCount} Respon
              </button>
            </Link>
            <VoteReport xid={report.xid} count={Number(report.upvoteCount)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanSayaListDetail;

import { useListReportComment } from "@/hooks/user_report/useListReportComment";
import { formatHumanDayTime } from "@/lib/datetime";
import * as React from "react";

export interface ListKomentarProps {
  xid: string;
}

const ListKomentar: React.FC<ListKomentarProps> = ({ xid }) => {
  const { listComment, isLoading } = useListReportComment({ xid });

  return (
    <div className="divide-y divide-gray-100">
      {!isLoading && listComment.length === 0 && (
        <div className="p-[20px]">
          <img
            src="/icons/empty_comment.svg"
            alt="empty"
            className="w-[100px] h-[100px] mx-auto"
          />
          <div className="text-center text-[16px] mt-[20px] font-semibold">
            Belum terdapat komentar!
          </div>
          <div className="text-center text-[14px] text-gray-500 mt-[12px]">
            Saat ini belum terdapat komentar terkait laporan ini.
          </div>
        </div>
      )}
      {!isLoading &&
        listComment.map((comment) => (
          <div key={comment.id} className="px-[16px] py-[12px]">
            <div className="flex items-center gap-2 text-[10px]">
              <div className="truncate">{comment.user.fullName}</div>
              {comment.user.verified && (
                <img
                  src="/icons/protected_flag.svg"
                  alt="verified"
                  className="w-[12px] h-[12px]"
                />
              )}
              <div className="text-gray-400">
                {formatHumanDayTime(parseInt(comment.createdAt))}
              </div>
            </div>
            <div className="rounded-md text-gray-500 bg-green-50 px-2 py-1 text-[12px]">
              {comment.message}
            </div>
          </div>
        ))}
      {isLoading && (
        <div className="flex justify-center p-5">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default ListKomentar;

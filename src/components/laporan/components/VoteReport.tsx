import * as React from "react";

import { useReportVote } from "@/hooks/user_report/useReportVote";
import { useToogleReportVote } from "@/hooks/user_report/useToogleReportVote";
import { Report } from "@/types/report/report";

export interface VoteReportProps {
  report: Report;
}

const VoteReport: React.FC<VoteReportProps> = ({ report }) => {
  const { data: vote, isLoading } = useReportVote({ xid: report.xid });

  const { mutate: toggleVote, isPending: isVoting } = useToogleReportVote();
  const handleToggleVote = async () => {
    await toggleVote({ xid: report.xid });
  };

  return (
    <button
      className={`btn btn-sm text-[10px] ${
        vote
          ? "btn-outline btn-success text-green-600"
          : " bg-white text-gray-500"
      }`}
      onClick={handleToggleVote}
      disabled={isLoading || isVoting}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs" />
      ) : (
        <img
          src="/icons/arrow_circle_up.svg"
          alt="Dukungan"
          className="w-[16px] h-[16px] text-neutral-500"
        />
      )}
      {report.upvoteCount} Dukungan
    </button>
  );
};

export default VoteReport;

import * as React from "react";

import { useReportVote } from "@/hooks/user_report/useReportVote";
import { useToogleReportVote } from "@/hooks/user_report/useToogleReportVote";

export interface VoteReportProps {
  xid: string;
  count: number;
}

const VoteReport: React.FC<VoteReportProps> = ({ xid, count }) => {
  const [currentCount, setCurrentCount] = React.useState<number>(count);
  const { data: vote, isLoading } = useReportVote({ xid });

  const { mutate: toggleVote, isPending: isVoting } = useToogleReportVote();
  const handleToggleVote = async () => {
    await toggleVote(
      { xid },
      {
        onSuccess: (data) => {
          if (!!data) {
            setCurrentCount(data.vote ? count + 1 : count);
          }
        },
      }
    );
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
      {currentCount} Dukungan
    </button>
  );
};

export default VoteReport;

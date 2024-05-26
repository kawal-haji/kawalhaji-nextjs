import * as React from "react";

import { useReportVote } from "@/hooks/user_report/useReportVote";
import { useToogleReportVote } from "@/hooks/user_report/useToogleReportVote";
import { useSession } from "next-auth/react";

export interface VoteReportProps {
  xid: string;
  count: number;
}

const VoteReport: React.FC<VoteReportProps> = ({ xid, count }) => {
  const { data: dataSession } = useSession();
  const [currentCount, setCurrentCount] = React.useState<number>(count);
  const [isVoted, setIsVoted] = React.useState<boolean>(false);
  const { data: vote, isLoading } = useReportVote({ xid });

  const { mutate: toggleVote, isPending: isVoting } = useToogleReportVote();
  const handleToggleVote = async () => {
    await toggleVote(
      { xid },
      {
        onSuccess: (data) => {
          if (vote) {
            setCurrentCount(data?.vote ? count : count - 1);
          } else {
            setCurrentCount(data?.vote ? count + 1 : count);
          }

          setIsVoted(data?.vote ?? false);
        },
      }
    );
  };

  React.useEffect(() => {
    setIsVoted(!!vote);
  }, [vote]);

  if (!dataSession?.user?.xid) {
    return (
      <div className="flex items-center gap-2 text-[10px] md:text-[12px] text-gray-500">
        <img
          src="/icons/arrow_circle_up.svg"
          alt="Dukungan"
          className="w-[16px] h-[16px] text-neutral-500"
        />
        <div className="mt-1">{currentCount} Dukungan</div>
      </div>
    );
  }

  return (
    <button
      className={`btn btn-sm text-[10px] md:text-[12px] ${
        isVoted
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

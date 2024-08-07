import { useSendReportComment } from "@/hooks/user_report/useSendReportComment";
import * as React from "react";

export interface KirimKomentarProps {
  xid: string;
}

const KirimKomentar: React.FC<KirimKomentarProps> = ({ xid }) => {
  const [message, setMessage] = React.useState<string>("");

  const { mutate: sendComment, isPending: isSending } = useSendReportComment();
  const handleSendComment = async () => {
    if (message) {
      await sendComment({ xid, komentar: message });
      setMessage("");
    }
  };

  const handleEnterKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendComment();
    }
  };

  return (
    <label className="input rounded-none flex items-center gap-2">
      <input
        type="text"
        className="grow border-none text-[14px]"
        placeholder="Tambahkan komentar..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isSending}
        onKeyUp={handleEnterKeyPressed}
      />
      {isSending ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <img
          src="/icons/send_comment.svg"
          alt="search"
          className="w-[32px] h-[32px]"
          onClick={handleSendComment}
        />
      )}
    </label>
  );
};

export default KirimKomentar;

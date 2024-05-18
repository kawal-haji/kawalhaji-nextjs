import { useSendComment } from "@/hooks/user_report/useSendComment";
import * as React from "react";

export interface KirimKomentarProps {
  xid: string;
}

const KirimKomentar: React.FC<KirimKomentarProps> = ({ xid }) => {
  const [message, setMessage] = React.useState<string>("");

  const { mutate: sendComment, isPending: isSending } = useSendComment();
  const handleSendComment = async () => {
    if (message) {
      await sendComment({ xid, komentar: message });
      setMessage("");
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

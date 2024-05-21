import * as React from "react";

import { useLoginGoogle } from "@/hooks/useLoginGoogle";
import { URL_SSO_GOOGLE } from "@/lib/constants";
import { useSession } from "next-auth/react";

export interface FullNameUserProps {
  sayHai?: boolean;
}

const FullNameUser: React.FC<FullNameUserProps> = ({ sayHai }) => {
  const { data: dataSession } = useSession();
  const { isLoading } = useLoginGoogle();

  if (!!dataSession?.user?.xid) {
    return (
      <div className="flex items-center gap-2">
        <div className="truncate text-[16px] font-medium text-white">
          {sayHai ? "Hai," : ""} {dataSession?.user?.fullName ?? "Tamu"}
        </div>
        {dataSession?.user?.verified && (
          <img
            src="/icons/verified_flag.svg"
            alt="verified"
            className="w-[16px] h-[16px]"
          />
        )}
      </div>
    );
  }

  if (isLoading) {
    return <span className="loading loading-spinner loading-md text-white" />;
  }

  return (
    <a
      href={URL_SSO_GOOGLE}
      className="truncate text-[16px] font-medium text-white"
    >
      Silahkan login disini
    </a>
  );
};

export default FullNameUser;

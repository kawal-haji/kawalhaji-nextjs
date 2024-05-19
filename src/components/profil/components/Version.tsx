import * as React from "react";

import { useVersion } from "@/hooks/useVersion";

export interface VersionProps {}

const Version: React.FC<VersionProps> = ({}) => {
  const { data: version, isLoading } = useVersion();

  if (isLoading) {
    return <span className="loading loading-spinner loading-sm" />;
  }

  return version?.appVersion ?? "-";
};

export default Version;

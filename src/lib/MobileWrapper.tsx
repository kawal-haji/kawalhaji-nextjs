import * as React from "react";

import { useMediaQuery } from "usehooks-ts";

export interface MobileWrapperProps {
  children: React.ReactNode;
}

const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">{children}</div>
    </div>
  );
};

export default MobileWrapper;

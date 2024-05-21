import * as React from "react";

import { URL_SSO_GOOGLE } from "@/lib/constants";

export interface LoginAsGoogleProps {}

const LoginAsGoogle: React.FC<LoginAsGoogleProps> = () => {
  return (
    <a href={URL_SSO_GOOGLE} className="btn bg-white md:w-[350px] mx-auto">
      Masuk dengan Google
    </a>
  );
};

export default LoginAsGoogle;

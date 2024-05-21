import * as React from "react";

import { BASE_URL, GOOGLE_CLIENT_ID } from "@/lib/constants";

export interface LoginAsGoogleProps {}

const LoginAsGoogle: React.FC<LoginAsGoogleProps> = () => {
  return (
    <a
      href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&state=kawalhaji&redirect_uri=${BASE_URL}/auth/callback/google&response_type=code&include_granted_scopes=true&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email`}
      className="btn bg-white md:w-[350px] mx-auto"
    >
      Masuk dengan Google
    </a>
  );
};

export default LoginAsGoogle;

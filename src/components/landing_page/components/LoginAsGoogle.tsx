import * as React from "react";

import { BASE_URL, GOOGLE_CLIENT_ID } from "@/lib/constants";
import { LoginType } from "@/types/auth";
import { signIn } from "next-auth/react";

export interface LoginAsGoogleProps {
  code: string;
}

const LoginAsGoogle: React.FC<LoginAsGoogleProps> = ({ code }) => {
  React.useEffect(() => {
    const handleLoginWithGoogle = async () => {
      const response = await signIn("credentials", {
        loginAs: LoginType.Google,
        code,
      });

      if (response?.error) {
        console.error(response.error);
      } else {
        location.href = "/menu/beranda";
      }
    };

    if (!!code) {
      handleLoginWithGoogle();
    }
  }, [code]);

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

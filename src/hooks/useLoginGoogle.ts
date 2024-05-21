import { LoginType } from "@/types/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

export const useLoginGoogle = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const isLoading = !!code;

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

  return { isLoading };
};

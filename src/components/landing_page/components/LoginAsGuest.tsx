import * as React from "react";

import { LoginType } from "@/types/auth";
import { signIn } from "next-auth/react";

export interface LoginAsGuestProps {}

const LoginAsGuest: React.FC<LoginAsGuestProps> = ({}) => {
  const [isLoadingLoginAsGuest, setIsLoadingLoginAsGuest] =
    React.useState<boolean>(false);

  const handleLoginAsGuest = async () => {
    setIsLoadingLoginAsGuest(true);

    const response = await signIn("credentials", {
      loginAs: LoginType.Guest,
    });

    if (response?.error) {
      console.error(response.error);
    } else {
      location.href = "/menu/beranda";
    }

    setIsLoadingLoginAsGuest(false);
  };

  return (
    <button
      className="btn bg-black text-white md:w-[350px] mx-auto"
      onClick={handleLoginAsGuest}
      disabled={isLoadingLoginAsGuest}
    >
      {isLoadingLoginAsGuest && (
        <span className="loading loading-spinner mr-2" />
      )}
      Masuk sebagai Tamu
    </button>
  );
};

export default LoginAsGuest;

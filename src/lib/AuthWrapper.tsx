import { apiClient, setClientToken } from "@/apis/api-client";
import { useSession } from "next-auth/react";
import * as React from "react";

export interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { data, status } = useSession();

  if (status === "authenticated") {
    setClientToken(apiClient, data?.token ?? "");
  }

  if (status === "loading") {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default AuthWrapper;

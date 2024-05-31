import { deleteUserSession } from "@/apis/user/deleteUserSession";
import { useToast } from "@/hooks/useToast";
import { ToastType } from "@/types/toast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signOut, useSession } from "next-auth/react";

export const useLogout = () => {
  const { showToast } = useToast();
  const { data: dataSession } = useSession();

  const mutation = useMutation<boolean, AxiosError, {}>({
    mutationFn: dataSession?.user?.xid
      ? deleteUserSession
      : () => Promise.resolve(true),
    onSettled: async () => {
      await signOut();
      showToast(ToastType.Success, "Anda berhasil logout");
    },
  });

  return {
    ...mutation,
  };
};

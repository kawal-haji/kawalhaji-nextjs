import { timeoutToastAtom, toastAtom } from "@/store/ToastStore";
import { ToastType } from "@/types/toast";
import { useAtom, useSetAtom } from "jotai";

export const useToast = () => {
  const toast = useSetAtom(toastAtom);
  const [timeoutToast, setTimeoutToast] = useAtom(timeoutToastAtom);

  const showToast = (type: ToastType, message: string) => {
    if (timeoutToast) {
      toast(null);
      clearTimeout(timeoutToast);
    }

    const currentTimeout = setTimeout(() => {
      toast(null);
    }, 3000);

    setTimeoutToast(currentTimeout);

    toast({ message, type });
  };

  return { showToast };
};

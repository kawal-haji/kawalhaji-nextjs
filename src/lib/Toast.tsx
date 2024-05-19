import { toastAtom } from "@/store/ToastStore";
import { ToastType } from "@/types/toast";
import { useAtomValue } from "jotai";
import * as React from "react";

export interface ToastProps {
  children: React.ReactNode;
}

const Toast: React.FC<ToastProps> = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");
  const toast = useAtomValue(toastAtom);

  React.useEffect(() => {
    if (toast) {
      switch (toast.type) {
        case ToastType.Success:
          setBackgroundColor("green");
          break;
        case ToastType.Error:
          setBackgroundColor("red");
          break;
        case ToastType.Warning:
          setBackgroundColor("yellow");
          break;
        case ToastType.Info:
          setBackgroundColor("blue");
          break;
        default:
          setBackgroundColor("gray");
          break;
      }
    }
  }, [toast]);

  return (
    <div>
      {children}
      {toast && (
        <div className="toast w-full p-0">
          <div
            role="alert"
            className="alert alert-success rounded-none w-full border-none text-white"
            style={{ backgroundColor }}
          >
            <span className="text-[12px]">{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toast;

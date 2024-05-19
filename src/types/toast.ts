export enum ToastType {
  Success = "success",
  Info = "info",
  Error = "error",
  Warning = "warning",
}

export interface Toast {
  message: string;
  type: ToastType;
}

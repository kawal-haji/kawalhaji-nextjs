export interface Alert {
  statusCode?: number;
  message?: string;
  error?: Error;
  status?: "error" | "loading" | "success" | "info" | "warning" | undefined;
  title?: string;
  description?: string;
  success?: boolean;
}

export interface ErrorAlert {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
  validationErrors: Partial<ValidationError>[];
}

export interface ValidationError {
  property: string;
  value: string;
  message: string[];
}

export const successAlertResponse = (alert: Alert): Alert => {
  const success = [200, 201].includes(alert?.statusCode ?? 0);

  if (success) {
    return {
      ...alert,
      status: "success",
      title: "Berhasil",
      success,
    };
  } else {
    throw new Error("Gagal memproses permintaan");
  }
};

export const errorAlertResponse = (errorMessage: string): Alert => ({
  statusCode: 500,
  error: new Error(errorMessage),
  status: "error",
  title: "Error",
  success: false,
});

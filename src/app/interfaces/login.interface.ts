export interface UserData {
  email: string;
  password: string;
}

export interface ErrorsList {
  isValid: boolean;
  errorsList: Record<string, boolean>;
  errorMessages: Record<string, string>;
}

export interface HelperText {
  key: string;
  message: string;
}

export type ToastType = 'success' | 'error' | 'warning' | 'info';

import { ApiError } from "./api";

export const extractErrorMessage = (error: ApiError): string | undefined => {
    const message = error?.response?.data?.message;
    if (message && typeof message === 'string') {
      return message;
    }
    return undefined;
  };
  
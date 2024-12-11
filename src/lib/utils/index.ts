import { APIResponse } from "../types/mics";

export const toResponse = <T>({
  data,
  error,
  status,
}: {
  data?: T;
  error?: string;
  status?: number;
}): APIResponse<T> => {
  return {
    data: data || null,
    error: error || null,
    status: status || null,
  };
};

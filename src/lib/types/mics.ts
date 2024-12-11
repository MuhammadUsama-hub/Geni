export interface APIResponse<T = null> {
  data: T | null;
  error: string | null;
  status: number | null;
}
export type Message = {
  message: string;
};

export interface ApiResponse<T = object> {
  status: "success" | "error" | "pending";
  message: string;
  data: T;
  meta: Meta;
}
export interface ListResponse<T = object> {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Meta {
  page: number;
}

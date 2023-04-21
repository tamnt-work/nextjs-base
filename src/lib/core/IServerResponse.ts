export interface IServerResponse<T = any> {
  data?: T;
  meta?: Record<string, unknown>;
  status: number;
}

export interface IServerResponse<T = Array<Record<string, unknown>> | Record<string, unknown>> {
  data: T;
}

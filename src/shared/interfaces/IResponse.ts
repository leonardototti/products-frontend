export interface IResponseBase {
  success: boolean;
}

export interface IResponseGetAll<T> extends IResponseBase {
  result: T[];
  total: number;
  total_page: number;
}

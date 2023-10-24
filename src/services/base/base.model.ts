export interface IFetchOptions {
    [key: string]: any; //eslint-disable-line
}

export interface IFetchQuery {
    [key: string]: any; //eslint-disable-line
}

export interface IFetchBody {
    [key: string]: any; //eslint-disable-line
}

export interface IMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResponse<T> {
  data: T;
  meta: IMeta;
}

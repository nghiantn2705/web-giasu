import 'whatwg-fetch';
import queryString from 'query-string';
import { IFetchOptions, IFetchBody, IFetchQuery } from './base.model';

const requestAPI = async <T>(
  uri: string,
  options: IFetchOptions,
): Promise<T> => {
  const apiUrl =
    typeof window === 'undefined'
      ? process.env.API_URL
      : process.env.NEXT_PUBLIC_API_URL;

  let url = uri;
  if (uri.indexOf('http') !== 0) {
    url = `${apiUrl}${uri}`;
  }

  const res = await fetch(url, {
    ...options,
    cache: 'no-store',
  });

  if (options.mode !== 'no-cors') {
    const body = await res.json();
    if (res.status >= 200 && res.status < 300) {
      return body;
    }

    const error = new Error();
    error.message = body.message;
    error.name = body.name;
    (error as any).response = body; //eslint-disable-line
    throw error;
  } else {
    return null as any; //eslint-disable-line
  }
};

const get = async <T>(
  uri: string,
  query?: IFetchQuery,
  options?: IFetchOptions,
): Promise<T> => {
  return await requestAPI(`${uri}?${queryString.stringify(query || {})}`, {
    method: 'GET',
    ...options,
  });
};

const post = async <T>(
  uri: string,
  body: IFetchBody,
  options?: IFetchOptions,
): Promise<T> => {
  let isPostForm = false;

  if (typeof body === 'object' && body.constructor === FormData) {
    isPostForm = true;
  }

  return await requestAPI(uri, {
    method: 'POST',
    body: isPostForm ? body : JSON.stringify(body),
    headers: isPostForm ? {} : { 'Content-Type': 'application/json' },
    ...options,
  });
};

const put = async <T>(
  uri: string,
  body: IFetchBody,
  options?: IFetchOptions,
): Promise<T> => {
  let isPostForm = false;

  if (typeof body === 'object' && body.constructor === FormData) {
    isPostForm = true;
  }

  return await requestAPI(uri, {
    method: 'PUT',
    body: isPostForm ? body : JSON.stringify(body),
    headers: isPostForm ? {} : { 'Content-Type': 'application/json' },
    ...options,
  });
};
export const apiRequest = {
  get,
  post,
  put,
};

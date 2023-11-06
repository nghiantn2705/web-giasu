import 'whatwg-fetch';

import { apiRequest, IFetchBody } from './base';
import { ITeachers } from '@/types/ITeachers';

export const auth = (body: IFetchBody) => {
  return apiRequest.post<{
    user: ITeachers;
    access_token: string;
    refresh_token: string;
  }>(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, body);
};

export const getTokenRefresh = (body: IFetchBody) => {
  return apiRequest.post<{
    refresh_token: string;
    access_token: string;
    user: ITeachers;
  }>(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, body);
};

export const RegisterUser = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, body);
};

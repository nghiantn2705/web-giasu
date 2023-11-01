import 'whatwg-fetch';

import { apiRequest, IFetchBody, IFetchQuery } from './base';
import { ITeachers } from '@/types/ITeachers';

export const token = (body: IFetchBody) => {
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
export const getFilter = (query: IFetchQuery = {}) => {
  console.log(query);
  return apiRequest.get<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/filter`,
    query,
  );
};
export const postJob = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/job`, body);
};
export const putJob = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/job/${body?.id}`,
    body,
  );
};
export const getJob = (query: IFetchQuery = {}) => {
  return apiRequest.get<
    {
      id: number;
      idUser: string;
      idTeacher: string;
      idSubject: string;
      userImage: string;
      teacherImage: string;
      status: number;
      description: string;
    }[]
  >(`${process.env.NEXT_PUBLIC_API_URL}/job/${query?.id}`, query);
};

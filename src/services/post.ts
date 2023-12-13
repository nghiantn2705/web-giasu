import { apiRequest, IFetchQuery } from '@/services/base';
import { IUserInfo } from '@/types/IUserInfo';
import { IToken } from '@/types/IToken';

export const updateProfile = (query: IFetchQuery = {}) => {
  return apiRequest.put<IUserInfo[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${query?.id}`,
    query,
  );
};

export const SendMail = (query: IFetchQuery = {}) => {
  return apiRequest.post<IToken>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    query,
  );
};
export const resetPassword = (query: IFetchQuery = {}) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password/`,
    query,
  );
};
export const editPassword = (query: IFetchQuery = {}) => {
  return apiRequest.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/editpassword`,
    query,
  );
};

export const certificateAdd = (query: IFetchQuery = {}) => {
  return apiRequest.post(
    `${process.env.NEXT_PUBLIC_API_URL}/upload-certificate`,
    query,
  );
};

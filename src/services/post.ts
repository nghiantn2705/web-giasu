import { apiRequest, IFetchQuery } from '@/services/base';
import { IUserInfo } from '@/types/IUserInfo';

export const updateProfile = (query: IFetchQuery = {}) => {
  return apiRequest.put<IUserInfo[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${query?.id}`,
    query,
  );
};

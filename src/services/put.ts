import { apiRequest, IFetchQuery } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';

export const updateProfile = (query: IFetchQuery = {}) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');

  return apiRequest.put<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${query.id}`,
    query,
    {
      headers: token
        ? {
            Authorization: 'Bearer ' + token,
          }
        : {},
    },
  );
};

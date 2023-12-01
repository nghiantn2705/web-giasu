import { apiRequest, IFetchQuery } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';

export const updateProfile = (id: number, values: FormData) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');

  return apiRequest.put<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    values,
    {
      headers: token
        ? {
            Authorization: 'Bearer ' + token,
          }
        : {},
    },
  );
};
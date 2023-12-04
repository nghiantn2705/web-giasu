import { IFetchQuery, apiRequest } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';

export const updateProfile = (id: number, data: any) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');

  return apiRequest.put<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? 'Bearer ' + token : '',
      },
    },
  );
};
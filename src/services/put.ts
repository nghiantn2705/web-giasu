import { IFetchBody, IFetchQuery, apiRequest } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';
import axios from 'axios';
export const updateProfile = (id: number, data: FormData) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');

  return apiRequest.post<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    data,
    {
      headers: {
        Authorization: token ? 'Bearer ' + token : '',
      },
    },
  );
};

export const updateProfile2 = (body: IFetchBody) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');

  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${body?.id}`,
    body,
    {
      headers: {
        Authorization: token ? 'Bearer ' + token : '',
      },
    },
  );
};
// export const updateProfile2 = (id: number, body: FormData) => {
//   const token =
//     typeof window === 'object' && window.localStorage.getItem('access_token');

//   return apiRequest.put<ITeachers[]>(
//     `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
//     body,
//     {
//       headers: {
//         Authorization: token ? 'Bearer ' + token : '',
//       },
//     },
//   );
// };

import { IFetchBody, IFetchQuery, apiRequest } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';
import axios from 'axios';
export const updateProfile = async (id: number, data: any) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token ? 'Bearer ' + token : '',
        },
        method: 'PUT',
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
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

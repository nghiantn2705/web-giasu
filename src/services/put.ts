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

export const putStatusCV = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/update-status-teacher/${body?.id}`,
    body,
  );
};

export const certificatePublic = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/certificate-public/${body?.id}`,
    body,
  );
};

export const putStatusCertificate = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/status-certificate/${body?.id}`,
    body,
  );
};
export const deleteCertificatePublic = (body: any) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/delete-certificate/${body?.id}`,
    body,
  );
};

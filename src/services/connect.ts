import { apiRequest, IFetchBody } from '@/services/base';
import { IConnect } from '@/types/IConect';
import axios from 'axios';

export const getConnect = (query: any) => {
  return axios.get<IConnect[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/connect/${query?.id}`,
  );
};
export const postConnect = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/connect`, body);
};

export const putConnect = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/connect/${body?.id}`,
    body,
  );
};
export const getConnectSuccess = (query: number) => {
  return apiRequest.get<IConnect[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/connect/top/${query}`,
  );
};

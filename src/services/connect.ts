import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';
import { IConnect } from '@/types/IConect';

export const getConnect = (query: IFetchQuery = {}) => {
  return apiRequest.get<IConnect[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/connect/${query?.id}`,
    query,
  );
};
export const postConnect = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/connect`, body);
};

export const putConnec = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/connect/${body?.id}`,
    body,
  );
};

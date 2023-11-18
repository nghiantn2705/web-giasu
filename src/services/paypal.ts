/* eslint-disable no-undef */
import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';
import { IHistoryPaypal, IPay } from '@/types/IPay';

export const postPaypal = (body: IFetchBody) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');
  return apiRequest.post<IPay>(
    `${process.env.NEXT_PUBLIC_API_URL}/vnpay/deposit/`,
    body,
    {
      headers: token
        ? {
            Authorization: 'Bearer ' + token,
          }
        : {},
    },
  );
};
export const postSavePaypal = (body: IFetchBody) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');
  return apiRequest.post<IPay>(
    `${process.env.NEXT_PUBLIC_API_URL}/vnpay/`,
    body,
    {
      headers: token
        ? {
            Authorization: 'Bearer ' + token,
          }
        : {},
    },
  );
};
export const GetHistoryPaypal = (query: IFetchQuery) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');
  return apiRequest.get<IHistoryPaypal>(
    `${process.env.NEXT_PUBLIC_API_URL}/vnpay/${query?.id}`,
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

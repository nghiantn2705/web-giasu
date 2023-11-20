/* eslint-disable no-undef */
import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';
import { IHistoryPaypal, IPay } from '@/types/IPay';

export const postPaypal = (body: IFetchBody) => {
  return apiRequest.post<IPay>(
    `${process.env.NEXT_PUBLIC_API_URL}/vnpay/deposit/`,
    body,
  );
};
export const postSavePaypal = (body: IFetchBody) => {
  return apiRequest.post<IPay>(
    `${process.env.NEXT_PUBLIC_API_URL}/vnpay/`,
    body,
  );
};
export const GetHistoryPaypal = (query: IFetchQuery) => {
  return apiRequest.get<IHistoryPaypal>(
    `${process.env.NEXT_PUBLIC_API_URL}/vnpay/${query?.id}`,
    query,
  );
};

import { apiRequest, IFetchBody } from '@/services/base';
import { IPay } from '@/types/IPay';

export const postPaypal = (body: IFetchBody) => {
  return apiRequest.post<IPay>(
    `${process.env.NEXT_PUBLIC_API_URL}/deposit/`,
    body,
  );
};
export const postSavePaypal = (body: IFetchBody) => {
  return apiRequest.post<IPay>(
    `${process.env.NEXT_PUBLIC_API_URL}/saveDeposit/`,
    body,
  );
};

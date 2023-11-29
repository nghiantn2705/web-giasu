import { apiRequest, IFetchBody } from '@/services/base';

export const postContact = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, body);
};

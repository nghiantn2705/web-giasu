import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';

export const getFeedback = (query: IFetchQuery = {}) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');
  return apiRequest.get<
    {
      id: number;
      idSender: string;
      idTeacher: string;
      point: string;
      description: string;
    }[]
  >(`${process.env.NEXT_PUBLIC_API_URL}/feedback/${query?.id}`, query, {
    headers: token
      ? {
          Authorization: 'Bearer ' + token,
        }
      : {},
  });
};

export const postFeedback = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/feedback/`, body);
};

export const getStart = (query: IFetchQuery = {}) => {
  return apiRequest.get<{ avg: string }>(
    `${process.env.NEXT_PUBLIC_API_URL}/feedback/avgPoint/${query?.id}`,
    query,
  );
};

import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';

export const getFeedback = (query: IFetchQuery = {}) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');
  return apiRequest.get<{
    id: number;
    id_sender: string;
    id_teacher: string;
    point: string;
    description: string;
    updated_at: Date;
  }>(`${process.env.NEXT_PUBLIC_API_URL}/feedback/${query?.id}`, query, {
    headers: token
      ? {
          Authorization: 'Bearer ' + token,
        }
      : {},
  });
};
export const getFeedbackUser = (query: IFetchQuery = {}) => {
  return apiRequest.get<{
    id: number;
    id_sender: string;
    id_teacher: string;
    point: string;
    description: string;
    updated_at: Date;
  }>(`${process.env.NEXT_PUBLIC_API_URL}/feedback/user/${query?.id}`, query);
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

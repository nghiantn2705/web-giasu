import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';

export const getFeedback = (query: IFetchQuery = {}) => {
  return apiRequest.get<
    {
      id: number;
      idSender: string;
      idTeacher: string;
      point: string;
      description: string;
    }[]
  >(`${process.env.NEXT_PUBLIC_API_URL}/feedback/${query?.id}`, query);
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

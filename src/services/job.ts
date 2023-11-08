import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';

export const getJob = (query: IFetchQuery = {}) => {
  return apiRequest.get<
    {
      id: number;
      idUser: string;
      idTeacher: string;
      idSubject: string;
      subject: string[];
      class: string[];
      teacherImage: string;
      status: number;
      description: string;
    }[]
  >(`${process.env.NEXT_PUBLIC_API_URL}/job/${query?.id}`, query);
};

export const postJob = (body: IFetchBody) => {
  return apiRequest.post(`${process.env.NEXT_PUBLIC_API_URL}/job`, body);
};

export const putJob = (body: IFetchBody) => {
  return apiRequest.put(
    `${process.env.NEXT_PUBLIC_API_URL}/job/${body?.id}`,
    body,
  );
};

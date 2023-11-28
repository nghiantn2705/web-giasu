import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';

export const getJob = (query: IFetchQuery = {}) => {
  const token =
    typeof window === 'object' && window.localStorage.getItem('access_token');
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
  >(`${process.env.NEXT_PUBLIC_API_URL}/job/${query?.id}`, query, {
    headers: token
      ? {
          Authorization: 'Bearer ' + token,
        }
      : {},
  });
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
export const getJobDetail = (query: IFetchQuery = {}) => {
  return apiRequest.get<
    {
      nameUser: string;
      nameTeacher: string;
      emaaiUser: string;
      emailTeacher: string;
      phoneUser: string;
      phoneTeacher: string;
      addressUser: string;
      addressTeacher: string;
    }[]
  >(`${process.env.NEXT_PUBLIC_API_URL}/job/detail/${query?.id}`, query);
};

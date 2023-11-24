import { apiRequest, IFetchBody, IFetchQuery } from '@/services/base';

export const getConnect = (query: IFetchQuery = {}) => {
  return apiRequest.get<
    {
      id: number;
      idJob: number;
      idUser: string;
      idTeacher: string;
      noteUser: string;
      noteTeacher: string;
      comfirmUser: number;
      comfirmTeacher: number;
      status: number;
    }[]
  >(`${process.env.NEXT_PUBLIC_API_URL}/connect/${query?.id}`, query);
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

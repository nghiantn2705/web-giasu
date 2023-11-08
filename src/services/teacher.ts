import { apiRequest, IFetchQuery } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';

export const getTeacherByid = (query: IFetchQuery = {}) => {
  return apiRequest.get<ITeachers>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${query?.id}`,
    query,
  );
};

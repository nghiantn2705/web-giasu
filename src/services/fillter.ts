import { apiRequest, IFetchQuery } from '@/services/base';
import { ITeacherStart } from '@/types/ITeacherStart';
import { ITeachers } from '@/types/ITeachers';

export const getFilter = (query: IFetchQuery = {}) => {
  return apiRequest.get<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/filter`,
    query,
  );
};

export const getTeacherStart = (query: IFetchQuery = {}) => {
  return apiRequest.get<ITeacherStart[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/teacherStar`,
    query,
  );
};

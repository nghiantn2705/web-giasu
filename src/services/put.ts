import { apiRequest, IFetchQuery } from '@/services/base';
import { ITeachers } from '@/types/ITeachers';

export const updateProfile = (query: IFetchQuery = {}) => {
  return apiRequest.put<ITeachers[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${query.id}`,
    query,
  );
};

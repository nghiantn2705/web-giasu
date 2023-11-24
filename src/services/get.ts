import { apiRequest, IFetchQuery } from '@/services/base';
import { IDisctrict } from '@/types/IDistrict';
import { ISubject } from '@/types/ISubject';
import { ISubjectAndClass } from '@/types/ISubjectAndClass';
import { ISalary } from '@/types/ISalary';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';
import { IClass } from '@/types/IClass';

export const getDistrict = (query: IFetchQuery = {}) => {
  return apiRequest.get<IDisctrict[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/district/`,
    query,
  );
};

export const getSubject = (query: IFetchQuery = {}) => {
  return apiRequest.get<ISubject[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/subject/`,
    query,
  );
};

export const getSubjectAndClass = (query: IFetchQuery = {}) => {
  return apiRequest.get<ISubjectAndClass>(
    `${process.env.NEXT_PUBLIC_API_URL}/teachers/subjectAndClass/${query?.id}`,
    query,
  );
};
export const getClass = (query: IFetchQuery = {}) => {
  return apiRequest.get<IClass[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/class_levels/`,
    query,
  );
};

export const getSalary = (query: IFetchQuery = {}) => {
  return apiRequest.get<ISalary[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/ranksalary/`,
    query,
  );
};

export const getTimeSlot = (query: IFetchQuery = {}) => {
  return apiRequest.get<ITimeSlot[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/timeslot/`,
    query,
  );
};

export const getSchool = (query: IFetchQuery = {}) => {
  return apiRequest.get<ISchool[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/schools/`,
    query,
  );
};

export const getAdreess = (query: IFetchQuery = {}) => {
  return apiRequest.get<any>(
    `${process.env.NEXT_PUBLIC_GOONG_API}/Place/AutoComplete?api_key=${process.env.NEXT_PUBLIC_GOONG_API_KEY}&input=${query}`,
  );
};
export const getAdreessId = (query: IFetchQuery = {}) => {
  return apiRequest.get<any>(
    `${process.env.NEXT_PUBLIC_GOONG_API}/place/detail`,
    {
      api_key: process.env.NEXT_PUBLIC_GOONG_API_KEY,
      placeid: query,
    },
  );
};

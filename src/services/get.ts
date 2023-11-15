import { apiRequest, IFetchQuery } from '@/services/base';
import { IDisctrict } from '@/types/IDistrict';
import { ISubject } from '@/types/ISubject';
import { IClass } from '@/types/IClass';
import { ISalary } from '@/types/ISalary';
import { ITimeSlot } from '@/types/ITimeSlot';
import { ISchool } from '@/types/ISchool';

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
export const getLocation = (query: IFetchQuery = {}) => {
  return apiRequest.get(
    `https://provinces.open-api.vn/api/?depth=3&fbclid=IwAR0-hlFhzL4KsOvX2IBKXpxy5-2hNf6ZlGKSrTceLwK-e-ppuMsgL5oTX4s`,
    query,
  );
};
export const getAddress = (query: IFetchQuery = {}) => {
  return apiRequest.get(
    `https://provinces.open-api.vn/api/?depth=3&fbclid=IwAR0-hlFhzL4KsOvX2IBKXpxy5-2hNf6ZlGKSrTceLwK-e-ppuMsgL5oTX4s`,
    query,
  );
};

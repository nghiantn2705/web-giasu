import { ITeachers } from '@/types/ITeachers';

export interface IUser {
  user: ITeachers;
  access_token: string;
  refresh_token: string;
}

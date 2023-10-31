export interface ITeachers {
  role: string;
  address: string;
  school_id: number;
  citizen_card: string;
  education_level: string;
  class_id: { id: number; name: string };
  subject: { id: number; name: string };
  salary_id: number;
  gender: string;
  description: string;
  districtID: number;
  Certificate: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  time_tutor_id: { id: number; name: string };
  password: string;
  district: { id: number; name: string };
  id: number;
  status: number;
}

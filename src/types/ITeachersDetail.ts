export interface ITeachersDetail {
  Certificate: string;
  Citizen_card: string;
  date_of_birth: Date;
  address: string;
  avatar: string;
  description: string;
  education_level: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  role: string;
  salary_id: string;
  status: boolean;
  time_tutor_id: string;
  subject: [id: number, name: string];
  DistrictID: [id: number, name: string];
  school_id: [id: number, name: string];
  class_id: [id: number, name: string];
  time_slot: [id: number, name: string];
}

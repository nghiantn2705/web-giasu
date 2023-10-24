export interface ITeachers {
  Certificate: string;
  Citizen_card: string;
  District: string;
  address: string;
  avatar: string;
  class: string;
  description: string;
  education_level: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  role: string;
  salary: string;
  school_id: string;
  status: boolean;
  subject: {
    id: number;
    name: string;
  };
  time_tutor: string;
}

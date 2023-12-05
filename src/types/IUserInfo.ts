export interface IUserInfo {
  Certificate: string[];
  District: string;
  address: string;
  avatar: string;
  citizen_card: string;
  class: {
    id: number;
    name: string;
  };
  description: string;
  salary_id: string;
  current_role: string;
  education_level: string;
  exp: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  role: string;
  salary: string;
  school: string;
  subject: {
    id: number;
    name: string;
  };
  time_tutor: {
    id: number;
    name: string;
  };
}

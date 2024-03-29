export interface IUserInfo {
  Certificate: string;
  District: string;
  address: string;
  avatar: string;
  citizen_card: string;
  class: [
    {
      id: number;
      name: string;
    },
  ];
  description: string;
  // salary_id: string;
  current_role: string;
  education_level: string;
  exp: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  role: number;
  // salary: string;
  school: [
    {
      id: number;
      name: string;
    },
  ];
  school_id: [
    {
      id: number;
      name: string;
    },
  ];
  salary_id: [
    {
      id: number;
      name: string;
    },
  ];
  salary: string[];
  subject: [
    {
      id: number;
      name: string;
    },
  ];
  time_tutor: [
    {
      id: number;
      name: string;
    },
  ];
  date_of_birth: Date;
  gender: string;
  latitude: string;
  longitude: string;
  status: number;
  Certificate_public: string;
  add_certificate: string;
  status_certificate: number;
  coin: string;
  certificate: string[];
}

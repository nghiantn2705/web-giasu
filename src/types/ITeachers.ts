export interface ITeachers {
  id: number;
  role: string;
  gender: string;
  date_of_birth: string;
  email: string;
  avatar: string;
  phone: string;
  latitude: string;
  longitude: string;
  address: string;
  school_id: number;
  Citizen_card: number;
  education_level: string;
  class_id: [
    {
      id: number;
      class: string;
    },
  ];
  salary_id: string;
  description: string;
  time_tutor_id: number;
  status: number;
  DistrictID: number;
  name: string;
  // subject: string[];
  subject: [
    {
      id: number;
      name: string;
    },
  ];
  district: string;
  school: [
    {
      id: number;
      name: string;
    },
  ];
  class_levels: [
    {
      id: number;
      name: string;
    },
  ];
  time_slot: [
    {
      id: number;
      name: string;
    },
  ];
  current_role: string;
  Certificate: string[];
  coin: string;
}

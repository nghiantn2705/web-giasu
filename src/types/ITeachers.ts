export interface ITeachers {
  id: number;
  role: number;
  gender: string;
  date_of_birth: string;
  email: string;
  avatar: string;
  phone: string;
  latitude: string;
  longitude: string;
  address: string;
  school_id: [
    {
      id: number;
      name: string;
    },
  ];
  Citizen_card: number;
  education_level: [
    {
      id: number;
      name: string;
    },
  ];
  class_id: [
    {
      id: number;
      class: string;
    },
  ];
  salary_id: number[];
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
  renter: number;
  created_at: Date;
  Certificate_public: [{ id: number; path: string }];
  status_public: number;
  exp: string;
  average_point: string;
}

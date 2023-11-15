export interface ITeachers3 {
  id: number;
  role: string;
  gender: string;
  date_of_birth: string;
  email: string;
  avatar: string;
  phone: string;
  address: string;
  school_id: number;
  Citizen_card: number;
  education_level: string;
  class_id: [classId: string, index: number];
  salary_id: string;
  description: string;
  time_tutor_id: number;
  status: number;
  DistrictID: number;
  name: string;
  // subject: string;
  subject: [index: number, subjectId: string];
  district: {
    id: number;
    name: string;
  };
  school: {
    id: number;
    name: string;
  };
  class_levels: {
    id: number;
    name: string;
  };
  time_slot: {
    id: number;
    name: string;
  };
}
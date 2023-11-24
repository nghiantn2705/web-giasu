export interface ITeacherFilter {
  id: number;
  name: string;
  avatar: string;
  address: string;
  class_id: [
    {
      id: number;
      class: string;
    },
  ];
  subject: [
    {
      id: number;
      name: string;
    },
  ];
  district: string;
}

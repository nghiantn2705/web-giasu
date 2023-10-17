import axios from 'axios';

const getTeacher = async () => {
  const data = await axios.get(`${process.env.API_URL}/teachers`);
  return data;
};
export { getTeacher };

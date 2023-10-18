import { API_URL } from '../lib/Constants';
async function getDistrict() {
  const res = await fetch(API_URL + '/district');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getTimeslot() {
  const res = await fetch(API_URL + `/timeslot`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getTeachers() {
  const res = await fetch(API_URL + '/teachers');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export { getDistrict, getTimeslot, getTeachers };

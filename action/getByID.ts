import { API_URL } from '../src/lib/Constants';

async function getTeachesDistrict(id: string) {
  const res = await fetch(API_URL + `/teachers/district/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getTeachesTimeSlot(id: string) {
  const res = await fetch(API_URL + `/teachers/timeSlot/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export { getTeachesDistrict, getTeachesTimeSlot };

async function getDistrict() {
  const res = await fetch('http://127.0.0.1:8000/api/district');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getTimeslot() {
  const res = await fetch(`http://127.0.0.1:8000/api/timeslot`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getTeachers() {
  const res = await fetch('http://127.0.0.1:8000/api/teachers');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export { getDistrict, getTimeslot, getTeachers };

async function getDistrict() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/district`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getTeachers() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/teachers`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getSubject() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/subject`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getClass() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/class_levels`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export { getDistrict, getTeachers, getSubject, getClass };

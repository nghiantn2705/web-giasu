async function getTeachesDistrict(id: number) {
  const res = await fetch(`http://127.0.0.1:8000/api/teachers/district/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export { getTeachesDistrict };

async function getTeachesDistrict(id: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/teachers/district/${id}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getTeachesTimeSlot(id: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/teachers/timeSlot/${id}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function getTeachesByid(id: number) {
  const token = localStorage.getItem('apiuser');
  const accessToken = JSON.parse(token as string);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/users/${id}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function getFeedback(id: number) {
  const token = localStorage.getItem('apiuser');
  const accessToken = JSON.parse(token as string);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/feedback/${id}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function getStart(id: number) {
  const token = localStorage.getItem('apiuser');
  const accessToken = JSON.parse(token as string);
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/feedback/avgPoint/${id}`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export {
  getTeachesDistrict,
  getTeachesTimeSlot,
  getTeachesByid,
  getFeedback,
  getStart,
};

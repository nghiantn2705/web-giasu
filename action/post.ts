import { API_URL } from '@/lib/Constants';

async function SigninUser(req: any) {
  const body = JSON.stringify(req.body);
  const res = await fetch(API_URL + `/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  console.log(res);
  return res.json();
}

export { SigninUser };

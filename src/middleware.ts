import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token');
  console.log(accessToken);

  if (accessToken) {
    return NextResponse.next();
  } else {
    const url = request.nextUrl.clone();
    url.pathname = '/giasu';
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: ['/profile/:path*'],
};

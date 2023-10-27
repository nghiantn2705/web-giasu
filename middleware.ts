import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/auth/user' || '/auth/teacher';
  const refresh = localStorage.getItem('refresh_token') || '';
  const access = localStorage.getItem('access_token') || '';

  if (isPublicPath && refresh && access) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (!isPublicPath && !refresh && !access) {
    return NextResponse.redirect(new URL('/auth/user', request.url));
  }
}

export const config = {
  matcher: ['/', '/profile'],
};

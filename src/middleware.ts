import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AUTH_COOKIE_NAME = 'LankanLuminaryAuth';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get(AUTH_COOKIE_NAME);
  const isAuthenticated = cookie?.value === 'true';
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin/dashboard') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  if (pathname === '/admin' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*'],
}

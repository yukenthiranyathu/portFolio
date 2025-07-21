'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123';
const AUTH_COOKIE_NAME = 'LankanLuminaryAuth';

export async function login(formData: FormData) {
  const password = formData.get('password');
  
  if (password === ADMIN_PASSWORD) {
    cookies().set(AUTH_COOKIE_NAME, 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return redirect('/admin/dashboard');
  } else {
    return { error: 'Invalid password. Please try again.' };
  }
}

export async function logout() {
  cookies().set(AUTH_COOKIE_NAME, '', { expires: new Date(0), path: '/' });
  return redirect('/admin');
}

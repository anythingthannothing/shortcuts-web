'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/app/_context/auth-store-provider';

function useAuthentication(): boolean {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

    if (isLoggedIn) {
      login();
    }
  }, [login]);

  return isLoggedIn;
}

export default useAuthentication;

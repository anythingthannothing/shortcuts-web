'use client';

import React from 'react';

import GoogleLoginButton from '@/entities/auth/ui/google-login-button';
import MenuDropdown from '@/entities/auth/ui/menu-dropdown';
import useAuthentication from '@/shared/hooks/use-authentication';

function UserIcon() {
  const isLoggedIn = useAuthentication();
  return <>{isLoggedIn ? <MenuDropdown /> : <GoogleLoginButton />}</>;
}

export default UserIcon;

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import useLogout from '@/entities/auth/model/use-logout';
import { Button } from '@/shared/components/ui/button';

function LogoutButton() {
  const router = useRouter();
  const logout = useLogout();

  return (
    <Button
      className="capitalize w-full"
      onClick={() => {
        logout();
        router.push('/');
      }}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;

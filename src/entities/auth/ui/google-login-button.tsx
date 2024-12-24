'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import React from 'react';

import useGoogleLogin from '@/entities/auth/model/use-google-login';
import { useToast } from '@/shared/hooks/use-toast';

function GoogleLoginButton() {
  const { toast } = useToast();
  const { mutate, isPending, error } = useGoogleLogin();

  return (
    <GoogleLogin
      onSuccess={async ({ credential }: CredentialResponse) => {
        if (!credential) {
          return;
        }

        mutate(credential);
      }}
      onError={() => {
        toast({
          variant: 'destructive',
          title: 'Google Login failed.',
          description: 'Unexpected error occurred. Please try again later.',
        });
      }}
      useOneTap={true}
      size={'medium'}
    />
  );
}

export default GoogleLoginButton;

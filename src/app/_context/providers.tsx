'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

import { AuthStoreProvider } from '@/app/_context/auth-store-provider';
import { DarkModeProvider } from '@/app/_context/dark-mode-context';
import { getQueryClient } from '@/shared/configs/react-query/query-client';
import { ModalProvider } from '@/shared/plugins/modal/modal-provider';

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return (
    <AuthStoreProvider>
      <DarkModeProvider>
        <QueryClientProvider client={getQueryClient()}>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
          >
            <ModalProvider>{children}</ModalProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </DarkModeProvider>
    </AuthStoreProvider>
  );
}

export default Providers;

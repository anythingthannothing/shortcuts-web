'use client';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 Minutes
      gcTime: 1000 * 60 * 10, // 10 Minutes => Total 15 minutes cache time
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      // TODO: 에러 발생 토스트? 등 에러 핸들링 로직 처리
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      // TODO: 에러 발생 시 로직
    },
  }),
};

function makeQueryClient() {
  return new QueryClient(queryClientConfig);
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

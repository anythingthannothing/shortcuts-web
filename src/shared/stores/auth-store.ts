import { createStore } from 'zustand';

import { TokenController } from '@/shared/libs/token-controller';

export type AuthState = {
  isLoggedIn: boolean;
  tokenController: TokenController | null;
};

export type AuthAction = {
  login: () => void;
  logout: () => void;
  setTokenController: (tokenController: TokenController) => void;
};

export type AuthStore = AuthState & AuthAction;

export const defaultInitState: AuthState = {
  isLoggedIn: false,
  tokenController: null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    login: () =>
      set(() => ({
        isLoggedIn: true,
      })),
    logout: () =>
      set(() => ({
        isLoggedIn: false,
      })),
    setTokenController: (tokenController: TokenController) => {
      set(() => ({
        tokenController: tokenController,
      }));
    },
  }));
};

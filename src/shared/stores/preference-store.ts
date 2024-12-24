import { create } from 'zustand';

type State = {
  isDarkMode: boolean;
};

type Action = {
  setDarkMode: (isDarkMode: boolean) => void;
};

export const usePreferenceStore = create<State & Action>((set) => ({
  isDarkMode: false,
  setDarkMode: (isDarkMode: boolean) =>
    set(() => ({
      isDarkMode,
    })),
}));

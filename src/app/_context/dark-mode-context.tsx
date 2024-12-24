'use client';

import { createContext, ReactNode, useContext, useEffect } from 'react';

const DarkModeContext = createContext({
  toggleDarkMode: () => {},
});

function DarkModeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      const preferDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      localStorage.setItem('theme', preferDarkMode ? 'dark' : 'light');
      document.documentElement.classList.remove(
        preferDarkMode ? 'light' : 'dark',
      );
      document.documentElement.classList.add(preferDarkMode ? 'dark' : 'light');
      return;
    }
    document.documentElement.classList.remove(
      theme === 'light' ? 'dark' : 'light',
    );
    document.documentElement.classList.add(theme);
  }, []);

  function toggleDarkMode() {
    const theme = localStorage.getItem('theme')!;

    if (theme == 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(
      theme === 'light' ? 'dark' : 'light',
    );
  }

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  }
  return context;
}

export { DarkModeProvider, useDarkMode };

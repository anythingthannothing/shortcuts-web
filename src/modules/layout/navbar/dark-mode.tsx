'use client';

import * as React from 'react';
import { LuSun } from 'react-icons/lu';
import { RiMoonClearFill } from 'react-icons/ri';

import { useDarkMode } from '@/app/_context/dark-mode-context';
import { Button } from '@/shared/components/ui/button';

export default function DarkMode() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        toggleDarkMode();
      }}
    >
      <RiMoonClearFill className="hidden text-xl transition-all dark:inline dark:rotate-0 dark:scale-100 " />
      <LuSun className="dark:hidden text-xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
}

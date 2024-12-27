import React from 'react';

import UserIcon from '@/entities/auth/ui/user-icon';
import DarkMode from '@/modules/layout/navbar/dark-mode';
import Logo from '@/modules/layout/navbar/logo';

function Navbar() {
  return (
    <nav
      className={
        'border-b border-border col-span-2 row-span-1 flex items-center h-[80px] sticky top-0 z-10 bg-background'
      }
    >
      <div
        className={
          'container flex flex-row justify-between items-center flex-wrap gap-4'
        }
      >
        <Logo />
        <div className={'flex gap-2 md:gap-6 items-center'}>
          <DarkMode />
          <UserIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

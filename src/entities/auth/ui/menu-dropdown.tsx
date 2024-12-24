import Link from 'next/link';
import React from 'react';
import { LuAlignLeft } from 'react-icons/lu';

import LogoutButton from '@/entities/auth/ui/logout-button';
import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { Separator } from '@/shared/components/ui/separator';

const menuLinks = [
  {
    href: '/profile',
    label: 'My Profile',
  },
];

function MenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        {menuLinks.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className="capitalize w-full">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <Separator className={'my-2'} />
        <DropdownMenuItem key={'logout'}>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MenuDropdown;

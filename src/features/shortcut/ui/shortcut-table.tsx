import React from 'react';

import Shortcut from '@/features/shortcut/ui/shortcut';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';

interface Props {
  shortcutCategory: any;
  supportWindow: boolean;
  supportMac: boolean;
}

function ShortcutTable({ shortcutCategory, supportWindow, supportMac }: Props) {
  return (
    <Table className={'table-fixed w-full'}>
      <TableHeader>
        <TableRow>
          <TableHead className={`${supportWindow ? 'w-[25%]' : 'hidden'}`}>
            Window
          </TableHead>
          <TableHead className={`${supportMac ? 'w-[25%]' : 'hidden'}`}>
            Mac
          </TableHead>
          <TableHead className={'w-[50%]'}>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shortcutCategory.shortcuts.map((shortcut: any, index: number) => (
          <TableRow key={index} className={'relative'}>
            <TableCell
              className={`relative font-medium p-2 space-x-2 overflow-x-hidden hover:overflow-x-visible group h-full ${supportWindow ? '' : 'hidden'}`}
            >
              <Shortcut type={'window'} shortcutKey={shortcut.winKey} />
            </TableCell>
            <TableCell
              className={`relative font-medium p-2 space-x-2 overflow-x-hidden hover:overflow-x-visible group h-full ${supportMac ? '' : 'hidden'}`}
            >
              <Shortcut type={'mac'} shortcutKey={shortcut.macKey} />
            </TableCell>
            <TableCell className={'max-w-[10rem]'}>
              {shortcut.description}
            </TableCell>
            {/*<TableCell>{shortcut.likes}</TableCell>*/}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ShortcutTable;

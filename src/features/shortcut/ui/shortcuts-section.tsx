import React from 'react';

import ShortcutTable from '@/features/shortcut/ui/shortcut-table';

interface Props {
  program: any;
}

function ShortcutsSection({ program }: Props) {
  return (
    <section className={'flex flex-col gap-4'}>
      <h3 className={'text-2xl'}>Shortcuts</h3>
      {program.shortcutCategories.map(
        (shortcutCategory: any, index: number) => (
          <div key={index}>
            <h3>{shortcutCategory.name}</h3>
            <ShortcutTable
              shortcutCategory={shortcutCategory}
              supportWindow={program.supportWindow}
              supportMac={program.supportMac}
            />
          </div>
        ),
      )}
    </section>
  );
}

export default ShortcutsSection;

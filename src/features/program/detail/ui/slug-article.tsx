import React from 'react';

import ToggleBookmarkForm from '@/features/bookmark/ui/toggle-bookmark-form';
import ShareButton from '@/features/program/detail/ui/share-button';
import ShortcutsSection from '@/features/shortcut/ui/shortcuts-section';
import { Separator } from '@/shared/components/ui/separator';

function SlugArticle({ program, slug }: { program: any; slug: string }) {
  return (
    <article className={'lg:col-span-8 space-y-4 overflow-y-scroll'}>
      <header className={'flex justify-between items-center'}>
        <h2 className={'text-3xl font-bold'}>{program.name}</h2>
        <div className={'flex gap-4 items-center'}>
          <ToggleBookmarkForm programId={program.programId} />
          <ShareButton slug={slug} name={program.name} />
        </div>
      </header>
      <p className={'text-md whitespace-pre-wrap tracking-tight'}>
        {program.additionalInfo.longDesc}
      </p>
      <Separator />
      <ShortcutsSection program={program} />
    </article>
  );
}

export default SlugArticle;

import Link from 'next/link';
import React from 'react';

import ToggleBookmarkForm from '@/features/bookmark/ui/toggle-bookmark-form';

interface Props {
  programId: number;
  slug: string;
  name: string;
}

function CategoryItem({ programId, slug, name }: Props) {
  return (
    <li className={'flex justify-between items-center'}>
      <Link href={`/${slug}`} className={'text-sm'}>
        {name}
      </Link>
      <ToggleBookmarkForm programId={programId} />
    </li>
  );
}

export default CategoryItem;

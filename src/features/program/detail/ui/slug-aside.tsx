import React from 'react';

import RelatedContents from '@/features/related-content/list/ui/related-contents';

function SlugAside({ program }: { program: any }) {
  return (
    <aside className={'lg:col-span-4  sticky top-0'}>
      <div className={'space-y-4'}>
        {/*<AdBanner*/}
        {/*  dataAdSlot={'6911113695'}*/}
        {/*  dataAdFormat={'auto'}*/}
        {/*  dataFullWidthResponsive={true}*/}
        {/*/>*/}
        <h3>Useful Resources with {program.name}</h3>
        <RelatedContents relatedContents={program.relatedContents} />
      </div>
    </aside>
  );
}

export default SlugAside;

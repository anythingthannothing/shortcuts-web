import React from 'react';

import RelatedContentItem from '@/entities/related-content/ui/related-content-item';

interface Props {
  relatedContents: any[];
}

function RelatedContents({ relatedContents }: Props) {
  return (
    <div className={'flex flex-col gap-2 '}>
      {relatedContents.map((relatedContent) => (
        <RelatedContentItem
          key={relatedContent.relatedContentId}
          relatedContent={relatedContent}
        />
      ))}
    </div>
  );
}

export default RelatedContents;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/shared/components/ui/badge';

interface Props {
  relatedContent: any;
}

function RelatedContentItem({ relatedContent }: Props) {
  return (
    <div className={'flex items-center gap-2'}>
      <div className={'relative flex items-center justify-center w-21 h-14'}>
        <Image
          src={relatedContent.thumbnailUrl}
          alt={relatedContent.title}
          fill={true}
          objectFit="contain"
        />
      </div>
      <div className={'flex flex-col gap-1'}>
        <h4 className={'text-[0.9rem]'}>{relatedContent.title}</h4>
        <div className={'space-x-1.5'}>
          <Badge className={'inline'}>{relatedContent.type}</Badge>
          <Link
            href={relatedContent.url}
            target={'_blank'}
            className={'text-[0.85rem]'}
          >
            {relatedContent.url}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RelatedContentItem;

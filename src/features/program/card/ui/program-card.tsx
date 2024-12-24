import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/card/card';
import { Separator } from '@/shared/components/ui/separator';

function ProgramCard({ item }: any) {
  const { name, slug, shortDesc } = item;

  return (
    <article className={'group relative min-w-[14rem] max-w-[16rem]'}>
      <Link href={`/${slug}`} className={'group-hover:brightness-90'}>
        <Card>
          <CardHeader
            className={
              'flex justify-center items-center h-[8rem] w-full overflow-hidden rounded-md p-3'
            }
          >
            <div className={'relative w-full h-full'}>
              <Image
                src={`https://static.everyshortcuts.com/programs/${slug}`}
                alt={`${slug}&apos;s logo`}
                className={
                  'rounded-md transition-all duration-300 object-contain inset-4'
                }
                fill
                priority={true}
              />
            </div>
          </CardHeader>
          <Separator />
          <CardHeader>
            <CardTitle className={'text-lg'}>{name}</CardTitle>
          </CardHeader>
          <CardContent className={'h-24'}>
            <CardDescription className={'line-clamp-3'}>
              {shortDesc}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
}

export default ProgramCard;

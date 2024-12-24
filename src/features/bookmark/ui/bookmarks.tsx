import Link from 'next/link';
import React from 'react';

import useAuthentication from '@/shared/hooks/use-authentication';

interface Props {
  bookmarkedPrograms: any[];
}

function Bookmarks({ bookmarkedPrograms }: Props) {
  const isLoggedIn = useAuthentication();

  let content;

  if (!isLoggedIn) {
    content = (
      <div className={'w-full h-full flex justify-center items-center'}>
        <p>
          <strong>Sign in</strong> to add bookmark!
        </p>
      </div>
    );
  } else if (bookmarkedPrograms.length === 0) {
    content = (
      <div className={'w-full h-full flex justify-center items-center'}>
        <p>Add any program below!</p>
      </div>
    );
  } else {
    content = (
      <ol className={'grid grid-cols-2 gap-2'}>
        {bookmarkedPrograms.map((program) => (
          <li key={program.programId}>
            <Link href={`/${program.slug}`}>
              <p className={'text-nowrap overflow-hidden overflow-ellipsis'}>
                {program.name}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div
      className={
        'w-full min-h-32 max-h-48 border border-border rounded-sm p-2 overflow-y-scroll overflow-hidden'
      }
    >
      {content}
    </div>
  );
}

export default Bookmarks;

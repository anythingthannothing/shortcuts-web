import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href={'/'}>
      <h1 className={'text-3xl font-bold'}>shortcuts</h1>
    </Link>
  );
}

export default Logo;

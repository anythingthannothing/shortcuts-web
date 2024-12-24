import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer
      className={
        'flex flex-col items-center p-2 border-t-2 border-border gap-2 py-3 mt-auto'
      }
    >
      <div
        className={'max-w-5xl flex justify-center text-[0.9rem] w-full gap-8'}
      >
        <Link href={'/privacy-policy'}>Privacy Policy</Link>
        <Link href={'/condition-of-use'}>Condition of Use</Link>
      </div>
      <p className={'text-sm'}>
        &copy;{new Date().getFullYear()} Shortcuts.com.
      </p>
    </footer>
  );
}

export default Footer;

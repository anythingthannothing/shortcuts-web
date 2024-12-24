import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import Providers from '@/app/_context/providers';
import { getProgramCategoriesAction } from '@/app/categories/[category]/get-program-categories-action';
import { getAllProgramsAction } from '@/entities/program-category/api/get-program-categories-action';
import Footer from '@/modules/layout/footer/footer';
import Navbar from '@/modules/layout/navbar/navbar';
import Sidebar from '@/modules/layout/sidebar/ui/sidebar';
import { Toaster } from '@/shared/components/ui/toaster';

import styles from './base.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Shortcuts',
    template: '%s | Shortcuts',
  },
  generator: 'Next.js',
  publisher: 'Shortcuts',
  description: 'Introduce every shortcuts you must know',
  keywords: ['shortcuts', 'program', 'productivity', 'must know'],
};

export const revalidate = 3600;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getProgramCategoriesAction();
  const programCategories = await getAllProgramsAction();

  return (
    <html lang="en" className={`light h-full w-full ${styles.base}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} h-full w-full`}>
        <Providers>
          <div className={'relative flex flex-col'}>
            <Navbar categories={categories.map((category) => category.name)} />
            <div className={'flex flex-col'}>
              <div className={'flex overflow-hidden'}>
                <aside
                  className={
                    'flex flex-col gap-4 border-r border-border px-3 pt-4 pb-8 w-[300px] h-screen overflow-y-auto'
                  }
                >
                  <Sidebar programCategories={programCategories} />
                </aside>
                <main
                  className={
                    'relative flex-1 px-4 pt-4 pb-12 h-screen overflow-y-auto'
                  }
                >
                  {children}
                </main>
              </div>
              <Footer />
            </div>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}

import React from 'react';

import HomeModule from '@/modules/home/ui/home-module';

export const revalidate = 3600;

export const dynamic = 'force-static';
export const dynamicParams = false;

async function Page() {
  return <HomeModule />;
}

export default Page;

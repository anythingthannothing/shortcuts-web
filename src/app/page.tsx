import React from 'react';

import { getTopProgramsAction } from '@/app/get-top-programs-action';
import HomeModule from '@/modules/home/ui/home-module';

export const revalidate = 3600;

export const dynamic = 'force-static';
export const dynamicParams = false;

async function Page() {
  const rankedPrograms = await getTopProgramsAction();

  return <HomeModule rankedPrograms={rankedPrograms} />;
}

export default Page;

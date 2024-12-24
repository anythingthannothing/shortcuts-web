'use client';

import React, { useEffect } from 'react';

interface Props {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
}

function AdBanner({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: Props) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
    } catch (e) {}
  }, []);

  return (
    <ins
      className={'adsbygoogle'}
      style={{ display: 'block' }}
      data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_AD_CA}`}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
}

export default AdBanner;

import Script from 'next/script';
import React from 'react';

function AdSense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_AD_CA}`}
      crossOrigin="anonymous"
      strategy={'afterInteractive'}
    ></Script>
  );
}

export default AdSense;

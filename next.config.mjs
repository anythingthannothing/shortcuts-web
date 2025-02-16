/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(new URL('.', import.meta.url));

const nextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    minimumCacheTTL: 3600,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.everyshortcuts.com',
        pathname: '/**',
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  headers: () => {
    return [
      {
        source: '/((?!_next|.*\\.).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

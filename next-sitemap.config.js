/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://everyshortcuts.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outputDir: 'standalone',
  exclude: ['/profile'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: '/profile' }],
  },
};

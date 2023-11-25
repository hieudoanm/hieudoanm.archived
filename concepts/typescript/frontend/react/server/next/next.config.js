/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !isProd
});
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/nextjs-template' : undefined,
  assetPrefix: isProd ? '/nextjs-template/' : undefined,
  images: { unoptimized: true }
};

module.exports = withPWA(nextConfig);

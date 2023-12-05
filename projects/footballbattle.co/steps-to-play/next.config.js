/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/steps-to-play/en',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com']
  }
};

module.exports = nextConfig;

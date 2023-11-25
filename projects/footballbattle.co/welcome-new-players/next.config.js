/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/welcome-new-players/en',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;

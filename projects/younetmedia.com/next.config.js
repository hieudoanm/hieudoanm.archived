/** @type {import('next').NextConfig} */

const NODE_ENV = process.env.NODE_ENV ?? 'development';
console.log(`NODE_ENV=${NODE_ENV}`);

const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  register: process.env.NODE_ENV !== 'development',
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);

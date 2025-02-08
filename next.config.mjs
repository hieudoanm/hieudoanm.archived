import million from 'million/compiler';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: NODE_ENV === 'development' ? '.next' : 'docs',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: { turbo: { treeShaking: true } },
  compiler: { removeConsole: NODE_ENV !== 'development' },
};

export default million.next(nextConfig);

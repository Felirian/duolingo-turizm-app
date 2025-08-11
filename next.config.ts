import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['185.178.47.249', 'kvaks-backend.pushkeen.ru']
  },
  reactStrictMode: true,
};

export default nextConfig;

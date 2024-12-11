import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      // 'pushkeen-sites-admin-panels.pushkeen.ru',
      // 'publicart-web-admin.pushkeen.ru',
      // 'admin.pushkeen.ru',
      '185.178.47.249',
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

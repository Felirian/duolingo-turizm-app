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

  // Добавляем настройку Webpack
  webpack: (config, { isServer }) => {
    // Добавляем правило для обработки видеофайлов
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|ogv|mov|avi|flv|wmv)$/, // Добавляем поддержку разных форматов видео
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/', // Путь, по которому будет доступно видео
          outputPath: `${isServer ? '../' : ''}static/videos/`, // Папка для сохранения видео
          name: '[name].[hash].[ext]', // Имя файла с хешем
        },
      },
    });

    return config;
  },
};

export default nextConfig;
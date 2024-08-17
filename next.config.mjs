/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ["via.placeholder.com"],
    imageSizes: [16, 32, 48],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
  },
  // webpack(config) {
  //   config.module.rules.push(
  //     new webpack.DefinePlugin({
  //       "process.env": {
  //         BUILD_ID: JSON.stringify(config.buildId),
  //       },
  //     })
  //   );
  //   return config;
  // },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.buildId': JSON.stringify(buildId)
      })
    );
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;

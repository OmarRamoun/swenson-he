/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swensonhe-dev-challenge.s3.us-west-2.amazonaws.com',
        port: '',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{loader: '@svgr/webpack', options: {icon: true}}],
    });

    return config;
  },
};

module.exports = nextConfig;

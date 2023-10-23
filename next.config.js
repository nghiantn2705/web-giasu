/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pngtree.com',
      },
    ],
    domains: ['png.pngtree.com'],
  },
};

module.exports = nextConfig;

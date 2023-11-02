/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['png.pngtree.com', 'i.ibb.co', '127.0.0.1'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.png.pngtree.com',
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['png.pngtree.com', 'i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.png.pngtree.com',
      },
    ],
  },
};

module.exports = nextConfig;

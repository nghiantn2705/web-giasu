/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['png.pngtree.com'],
  },
};

module.exports = nextConfig;

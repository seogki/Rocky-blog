/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  env: {
    jest: true
  },
  experimental: {
    scrollRestoration: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;

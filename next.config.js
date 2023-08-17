/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    mdxRs: true
  },
  env: {
    jest: true
  },
  async rewrites() {
    return [
      {
        destination: "http://localhost:3001/:path*",
        source: "/api/:path*"
      }
    ];
  }
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);

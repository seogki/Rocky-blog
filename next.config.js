/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
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

module.exports = nextConfig;

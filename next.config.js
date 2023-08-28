/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  env: {
    jest: true
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/posts",
  //       destination: "/",
  //       permanent: true
  //     }
  //   ];
  // },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;

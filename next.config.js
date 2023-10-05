/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
  reactStrictMode: true,
  env: {
    jest: true
  },
  images: {
    unoptimized: false
  },
  async redirects() {
    return [
      {
        source: "/posts/search:path*",
        destination: "/posts:path*",
        permanent: true
      },
      {
        source: "/posts/search",
        destination: "/posts",
        permanent: true
      }
    ];
  }
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);

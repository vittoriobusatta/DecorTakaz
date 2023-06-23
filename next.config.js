/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: false,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;

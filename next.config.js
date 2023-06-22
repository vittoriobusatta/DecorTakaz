/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: false,
  },
  env: {
    HOST: process.env.NEXT_PUBLIC_HOST,
  },
};

module.exports = nextConfig;

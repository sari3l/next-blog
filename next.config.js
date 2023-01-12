/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn.jsdelivr.net",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;

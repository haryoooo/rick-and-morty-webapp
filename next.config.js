/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    // formats: ["image/png", "image/jpeg"],
  },
};

module.exports = nextConfig;

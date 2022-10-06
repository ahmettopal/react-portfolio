/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "asset.brandfetch.io",
      "cdn.jsdelivr.net"
    ]
  }
}

module.exports = nextConfig

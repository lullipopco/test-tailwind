/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com', 
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com', 
      },
    ],
  },
}
  
  
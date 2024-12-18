/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wellfedpics.blob.core.windows.net', '4.157.225.65'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'wellfedpics.blob.core.windows.net',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '4.157.225.65',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '4.157.225.65',
        pathname: '**',
      },  
    ],
    unoptimized: true, // Added to disable optimization for external images
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure the server listens on all network interfaces
};

module.exports = nextConfig;

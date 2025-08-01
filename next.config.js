/** @type {import('next').NextConfig} */
const nextConfig = {
    // no output: 'export'
    images: {
      domains: ['your-image-domain.com'], // if remote images
      // no unoptimized flag here
    },
  };
  module.exports = nextConfig;
  
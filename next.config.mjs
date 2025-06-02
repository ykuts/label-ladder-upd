/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    unoptimized: true
  },
  
  output: 'export',
  trailingSlash: true,
  distDir: 'out'
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'stock.adobe.com',
        port: '',
      },
    ],
  },
  
};

export default nextConfig;

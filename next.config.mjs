/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Cloudflare Pages 適配
  output: 'export',  // 導出靜態 HTML
  trailingSlash: true,
  // 禁用需要 server 的功能
  experimental: {
    // 禁用 server actions（如果有的話）
  },
};

export default nextConfig;

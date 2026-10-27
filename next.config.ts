import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async redirects() {
    return [{ source: '/impact', destination: '/testimonials', permanent: true }];
  },
};
export default nextConfig;

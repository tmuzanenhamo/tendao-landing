/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  // The Vercel address serves the same pages as the real domain. Sending it
  // there permanently leaves search engines one address for each page. Preview
  // deployments have their own hostnames, so they are not caught by this.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tendao-landing.vercel.app' }],
        destination: 'https://www.tendao.co.zw/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  async redirects() {
    return [
      {
        source: '/plan-your-trip',
        destination: '/visit-shenzhen',
        statusCode: 301,
      },
      {
        source: '/contact',
        destination: '/#contact',
        statusCode: 301,
      },
      // Short link printed on slides and shared in talks. Kept temporary (302)
      // on purpose: a 301 sticks in people's browsers forever, so if the Luma
      // event URL ever changes we could not fix it for anyone who had used it.
      {
        source: '/2027',
        destination: 'https://luma.com/shenzhen-seo-conference-2027',
        statusCode: 302,
      },
      {
        source: '/2027/',
        destination: 'https://luma.com/shenzhen-seo-conference-2027',
        statusCode: 302,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'ko-KR'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ko-KR',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
    ],
  },
  // async rewrites() {
  //   return [{ source: '/:path*', destination: 'http://15.165.217.111:3030/:path*' }];
  // },
  // assetPrefix: '.',
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: '/api/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
  //         { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value:
  //             'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  //         },
  //       ],
  //     },
  //   ];
  // },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;

// const withPWA = require('next-pwa')

module.exports = {
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  //   disable: process.env.NODE_ENV === 'development',
  // },
//   i18n: {
//    locales: ['en', 'tr'],
//    defaultLocale: 'tr',
//  },
  images: {
    domains: ['res.cloudinary.com', 'images.pexels.com'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}]
    })
    return config
  }
}

const siteUrl = process.env.NEXT_PUBLIC_URL;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/sitemap-example.xml'],
  sitemapSize: 1000,
  changefreq: 'daily',
  priority: 1.0,
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-example.xml`,
    ],
    policies: [
       {
        userAgent: '*',
        allow: '/',
      },
    ],
  }
};
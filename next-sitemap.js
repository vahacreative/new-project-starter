const siteUrl = `https://${process.env.NEXT_PUBLIC_URL}`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/sitemap-haberler.xml', '/sitemap-kurslar.xml', '/sitemap-kampusler.xml', '/sitemap-sayfalar.xml'],
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
      `${siteUrl}/sitemap-kampusler.xml`,
      `${siteUrl}/sitemap-haberler.xml`,
      `${siteUrl}/sitemap-kurslar.xml`,
      `${siteUrl}/sitemap-sayfalar.xml`,
    ],
    policies: [
       {
        userAgent: '*',
        allow: '/',
      },
    ],
  }
};
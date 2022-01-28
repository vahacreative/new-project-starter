const title = "My Page Title";
const description = "My Page Description";
const siteUrl = process.env.NEXT_PUBLIC_URL

const SEO = {
  title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
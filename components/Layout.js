import { NextSeo, LocalBusinessJsonLd } from "next-seo"

import Header from "./ui/Header"
import Footer from "./ui/Footer"

function Layout({ children, title = "", description = "", url = "", image = "" }) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: image,
              alt: `${title} sayfası görseli`,
            },
          ],
        }}
      />
      <LocalBusinessJsonLd
        type="Store"
        id="http://davesdeptstore.example.com"
        name="Dave's Department Store"
        description="Dave's latest department store in San Jose, now open"
        url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
        telephone="+14088717984"
        address={{
          streetAddress: "1600 Saratoga Ave",
          addressLocality: "San Jose",
          addressRegion: "CA",
          postalCode: "95129",
          addressCountry: "US",
        }}
        images={["https://example.com/photos/1x1/photo.jpg", "https://example.com/photos/4x3/photo.jpg", "https://example.com/photos/16x9/photo.jpg"]}
        sameAs={["www.company-website-url1.dev", "www.company-website-url2.dev", "www.company-website-url3.dev"]}
        openingHours={[
          {
            opens: "08:00",
            closes: "23:59",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          },
          {
            opens: "14:00",
            closes: "20:00",
            dayOfWeek: "Sunday",
            validFrom: "2019-12-23",
            validThrough: "2020-04-02",
          },
        ]}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

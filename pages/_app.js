import "../styles/swiper-bundle.min.css"
import "../styles/tailwind.css"
import { ApolloProvider } from "@apollo/client"
import { getApolloClient } from "graphql/apollo"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import { useRouter } from "next/router"
import * as gtag from "@/utils/gtag"
import { useEffect } from "react"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  const client = getApolloClient()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp

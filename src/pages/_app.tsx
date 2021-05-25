import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'
import { theme } from "../styles/theme";
import './swiperStyles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp

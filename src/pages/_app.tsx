import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';
import { theme } from "../styles/theme";

// Import Swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";

import '../styles/swiperStyles.scss';


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

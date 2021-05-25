import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { A11y, Autoplay, Scrollbar } from 'swiper';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slider() {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>      
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay:4000,
        }}
        style={{width: '100%', flex: '1'}}
      >
          <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/images/europe.png"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </ Swiper>
    </ Flex>    
  );
}
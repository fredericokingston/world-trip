import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { A11y, Autoplay, Scrollbar } from 'swiper';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  continents: Continent[];
}

type Continent = {
  id: string;
  title: string;
  subtitle: string;
  continentImage: string;
}

export function Slider({ continents }: SliderProps) {
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
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={continent.continentImage}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.id}`}>
                <a>
                  <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">{continent.title}</Heading>
                  <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>{continent.subtitle}</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
          
      </ Swiper>
    </ Flex>    
  );
}
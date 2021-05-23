import { Box, Heading, Text } from "@chakra-ui/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { SliderItem } from "./SliderItem";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Slider() {
  return (
    <Box flex="1" maxW={1240}>
      <Heading as="h2" textAlign="center" mb="12" fontWeight="medium">
        Vamos nessa?<br/>
        Então escolha seu continente
      </Heading>

      <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
        >
          <SwiperSlide >
            <SliderItem coverImage="/images/north-america.jpg" title="América do Norte" subtitle="Conheça os países" />
          </SwiperSlide>
          <SwiperSlide >
            <SliderItem coverImage="/images/south-america.jpg" title="América do Sul" subtitle="Faça sua viagem para Novo Mundo" />
          </SwiperSlide>
          <SwiperSlide >
            <SliderItem coverImage="/images/asia.jpg" title="Ásia" subtitle="Conheça culturas milenares" />
          </SwiperSlide>
          <SwiperSlide >
            <SliderItem coverImage="/images/africa.jpg" title="África" subtitle="O verdadeiro berço da humanidade" />
          </SwiperSlide>
          <SwiperSlide >
            <SliderItem coverImage="/images/europe.png" title="Europa" subtitle="O continente mais antigo" />
          </SwiperSlide>
          <SwiperSlide >
            <SliderItem coverImage="/images/oceania.jpg" title="Oceania" subtitle="Conheça essas belezas" />
          </SwiperSlide>
        </Swiper>
    </Box>
  );
}
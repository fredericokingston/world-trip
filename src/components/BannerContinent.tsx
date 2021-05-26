import { Box, Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
  title: string;
  bannerImage: string;
}

export function BannerContinent({ title, bannerImage }: BannerContinentProps) {
  return (
    <Flex
      as="section"
      w="100%"
      h="500"
      bgImg={bannerImage}
      objectFit="cover"
      bgPosition="center"
      align="center"
      justify="center"
      py="20"
    >
      <Flex w="100%" h="100%" maxW={1160} align="flex-end">
        <Heading
          fontSize="48"
          color="light.headings-and-text"
          fontWeight="semibold"
        >
          {title}
        </Heading>
      </Flex>
      
    </Flex>
  );
}
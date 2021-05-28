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
      h={["150", "500"]}
      bgImg={bannerImage}
      objectFit="cover"
      bgPosition="center"
      align="center"
      justify="center"
      py={["10", "20"]}
    >
      <Flex w="100%" h="100%" align={["center", "flex-end"]} maxW={1160}>
        <Heading
          fontSize={["30", "48"]}
          mx={["auto", 0]}
          textAlign={["center", "left"]}
          color="light.headings-and-text"
          fontWeight="semibold"
        >
          {title}
        </Heading>
      </Flex>
      
    </Flex>
  );
}
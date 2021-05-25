import { Box, Flex, Heading } from "@chakra-ui/react";

export function BannerContinent() {
  return (
    <Flex
      as="section"
      w="100%"
      h="500"
      bgImg="/images/europe-banner.png"
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
          Europa
        </Heading>
      </Flex>
      
    </Flex>
  );
}
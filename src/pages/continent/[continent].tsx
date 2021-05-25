import { Box, Flex, Heading, HStack, SimpleGrid, Image as ChakraImage, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BannerContinent } from "../../components/BannerContinent";
import { Header } from '../../components/Header'

export default function Continent() {

  return (
    <Flex w="100%" direction="column" align="center" justify="center" marginBottom="8">
      <Header />
      <BannerContinent />
      
      <Flex
        as="section"
        flexDir={["column", "row"]}
        w="100%"
        maxW={1160}
        align="center"
        justify="space-between"
        py="20"
      >
        <Text
          as="p"
          maxW="600"
          fontSize="24"
          lineHeight="9"
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack spacing="10" align="center" justify="center">
          <Box align="center" justify="center">
            <Text fontSize={48} fontWeight="semibold" color="highlight.highlight">50</Text>
            <Text mt="8" fontSize="24" fontWeight="semibold">países</Text>
          </Box>
          <Box align="center" justify="center">
            <Text fontSize={48} fontWeight="semibold" color="highlight.highlight">60</Text>
            <Text mt="8" fontSize="24" fontWeight="semibold">línguas</Text>
          </Box>
          <Box align="center" justify="center">
            <Text fontSize={48} fontWeight="semibold" color="highlight.highlight">27</Text>
            <Text mt="8" fontSize="24" fontWeight="semibold">cidades +100</Text>
          </Box>
        </HStack>
      </Flex>

      <Flex
        as="section"
        direction="column"
        w="100%"
        maxW={1160}
        align="left"
        justify="center"
      >
          <Heading as="h2" textAlign="left" mb="12" fontWeight="medium">
            Cidades +100
          </Heading>

          <SimpleGrid columns={[1, 2, 4]} spacing={46} mx="auto">

            <Box
              maxW={256}
              bg="white"
              borderWidth="1px"
              borderRadius="lg"
              borderColor="highlight.highlight.200"
              overflow="hidden"
            >
              <ChakraImage src="/images/card-image.png" alt="" w="100%"/>
              <Flex p="6" flexDir="row" align="center" justify="space-between">
                <Box>
                  <Box
                    fontFamily="barlow"
                    fontSize="20"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Londres
                  </Box>
                  <Box
                    mt="3"
                    fontFamily="barlow"
                    fontWeight="medium"
                    color="dark.info"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Reino Unido
                  </Box>
                </Box>
                <ChakraImage src="/images/card-image.png" alt="" w={30} h={30} borderRadius="15" />
              </Flex>
            </Box>
          </SimpleGrid>
        </Flex>
    </Flex>
  );
}
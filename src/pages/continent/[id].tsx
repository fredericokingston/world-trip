import { Box, Flex, Heading, HStack, Image as ChakraImage, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { BannerContinent } from "../../components/BannerContinent";
import { Header } from '../../components/Header';
import { api } from "../../services/api";


interface HundreadPlusProps {
  id: number,
  name: string,
  country: string,
  image: string,
  countryIcon: string
}

interface ContinentProps {
  data: {
    id: string,
    title: string,
    continentImage: string;
    description: string
    countries: number,
    languages: number,
    hundreadPlus: HundreadPlusProps[]
  }
}

export default function Continent({ data }: ContinentProps) {

  return (
    <Flex w="100%" direction="column" align="center" justify="center" marginBottom="8">
      <Header />
      <BannerContinent title={data.title} bannerImage={data.continentImage}/>
      
      <Flex
        as="section"
        flexDir={["column", "row"]}
        w="100%"
        maxW={1160}
        align="center"
        justify="space-between"
        py={["6", "20"]}
        px={["4", "0"]}
      >
        <Text
          as="p"
          maxW="600"
          fontSize={["14", "24"]}
          lineHeight="160%"
          textAlign="justify"
        >
          {data.description}
        </Text>
        <HStack spacing={["6", "10"]} align="center" justify="space-between" my={["6", "0"]}>
          <Box align={["start", "center"]} justify="center">
            <Text fontSize={[24, 48]} fontWeight="semibold" color="highlight.highlight">{data.countries}</Text>
            <Text mt={["1", "8"]} fontSize={["18", "24"]} fontWeight="semibold">países</Text>
          </Box>
          <Box align={["start", "center"]} justify="center">
            <Text fontSize={[24, 48]} fontWeight="semibold" color="highlight.highlight">{data.languages}</Text>
            <Text mt={["1", "8"]} fontSize={["18", "24"]} fontWeight="semibold">línguas</Text>
          </Box>
          <Box align={["start", "center"]} justify="center">
            <Text fontSize={[24, 48]} fontWeight="semibold" color="highlight.highlight">27</Text>
            <Text mt={["1", "8"]} fontSize={["18", "24"]} fontWeight="semibold">cidades +100</Text>
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
          <Heading textAlign="left" mb="12" fontSize={["24", "30"]} fontWeight="medium" px={["4", "0"]}>
            Cidades +100
          </Heading>

          <SimpleGrid columns={[1, 2, 4]} spacing={46} mx="auto">
          { data.hundreadPlus.map(city => (
            <Box
              key={city.id}
              w={256}
              h={279}
              bg="white"
              borderWidth="1px"
              borderRadius="lg"
              borderColor="highlight.highlight.200"
              overflow="hidden"
            >
              <ChakraImage src={city.image} alt="" w="100%" h="60%" objectFit="cover"/>
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
                    {city.name}
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
                    {city.country}
                  </Box>
                </Box>
                <ChakraImage
                  src={city.countryIcon}
                  alt={`Bandeira ${city.name}`}
                  objectFit="cover"
                  w={30}
                  h={30}
                  borderRadius={30}
                />
              </Flex>
            </Box>
        ))}
          </SimpleGrid>
        </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/continents')
  const continents = response.data

  const paths = continents.map((continent) => ({
    params: { id: continent.id}
  }))
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const { data } = await api.get(`/continents/${id}`);
 
  console.log(data)
  return {
    props: {
      data
    }
  }
}
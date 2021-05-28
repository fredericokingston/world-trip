import { Center, Divider, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { GiCapitol, GiCongress, GiEarthAmerica, GiMartini, GiSurfBoard } from "react-icons/gi";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { IconList } from "../components/IconList";
import { Slider } from "../components/Slider";
import { api } from "../services/api";

interface HomeProps {
  continents: Continent[];
}

type Continent = {
  id: string;
  title: string;
  subtitle: string;
  continentImage: string;
}

export default function Home({ continents }: HomeProps) {

  return (
    <Flex w="100%" direction="column" align="center" justify="center" marginBottom="2">
      <Header />

      <Banner />

      <IconList />

      <Divider
        w="20"
        my={["12", "20"]}
        orientation="horizontal"
        borderColor="dark.headings-and-text"
        borderBottomWidth={2}
        borderRadius={2}
      />
      
      <Heading as="h2" fontSize={["20", "30"]} textAlign="center" mb={["8", "12"]} fontWeight="medium">
        Vamos nessa?<br/>
        Então escolha seu continente
      </Heading>
      <Slider continents={continents}/>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents')
  const continents = response.data
  return {
    props: {
      continents
    }
  }
}
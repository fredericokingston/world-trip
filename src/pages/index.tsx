import { Center, Divider, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { GiCapitol, GiCongress, GiEarthAmerica, GiMartini, GiSurfBoard } from "react-icons/gi";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";



export default function Home() {
  return (
    <Flex w="100%" direction="column" align="center" justify="center" marginBottom="8">
      <Header />
      <Banner />

      <Stack direction="row" w="100%" align="center" justify="space-between" maxW={1160} my="20" >
        <Flex direction="column" align="center" justify="center">
          <Icon as={GiMartini} fontSize={84} color="highlight.highlight"/>
          <Text mt="4" fontSize="24" fontWeight="semibold">vida noturna</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Icon as={GiSurfBoard} fontSize={84} color="highlight.highlight"/>
          <Text mt="4" fontSize="24" fontWeight="semibold">praia</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Icon as={GiCapitol} fontSize={84} color="highlight.highlight"/>
          <Text mt="4" fontSize="24" fontWeight="semibold">moderno</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Icon as={GiCongress} fontSize={84} color="highlight.highlight"/>
          <Text mt="4" fontSize="24" fontWeight="semibold">clássico</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Icon as={GiEarthAmerica} fontSize={84} color="highlight.highlight"/>
          <Text mt="4" fontSize="24" fontWeight="semibold">e mais...</Text>
        </Flex>
      </Stack>

      <Divider
        w="20"
        mb="20"
        orientation="horizontal"
        borderColor="dark.headings-and-text"
        borderBottomWidth={4}
        borderRadius={2}
      />
      
      <Heading as="h2" textAlign="center" mb="12" fontWeight="medium">
        Vamos nessa?<br/>
        Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  )
}



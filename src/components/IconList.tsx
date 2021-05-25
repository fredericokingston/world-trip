import { Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { GiCapitol, GiCongress, GiEarthAmerica, GiMartini, GiSurfBoard } from "react-icons/gi";

export function IconList() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW={1160} my="20" w="100%">
    
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
    </Grid>
  );
}
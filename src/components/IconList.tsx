import { Box, Flex, Grid, Stack, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";
import { GiCapitol, GiCongress, GiEarthAmerica, GiMartini, GiSurfBoard } from "react-icons/gi";

export function IconList() {
  const isWideMode = useBreakpointValue({
    base: false,
    md: true
  })

 if (isWideMode) {
    return (
      <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW={1160} marginTop={["12", "20"]} w="100%">
    
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
    )} else {
      return (
     <Stack
        spacing="6"
        display="flex"
        justify="space-around"
        direction="row"
        flexWrap="wrap"
        maxW={275}
        marginTop={["12", "20"]}
      >
        <Box fontSize="20" fontWeight="medium" align="center" paddingBottom="4">
          <Icon as={BsFillCircleFill} fontSize="10" marginRight="2" color="highlight.highlight"/>
          vida noturna
        </Box>
        <Box fontSize="20" fontWeight="medium" align="center" paddingBottom="4">
          <Icon as={BsFillCircleFill} fontSize="10" marginRight="2" color="highlight.highlight"/>
          praia
        </Box>
        <Box fontSize="20" fontWeight="medium" align="center" paddingBottom="4">
          <Icon as={BsFillCircleFill} fontSize="10" marginRight="2" color="highlight.highlight"/>
          moderno
        </Box>
        <Box fontSize="20" fontWeight="medium" align="center" paddingBottom="4">
          <Icon as={BsFillCircleFill} fontSize="10" marginRight="2" color="highlight.highlight"/>
          clássico
        </Box>
        <Box fontSize="20" fontWeight="medium" align="center">
          <Icon as={BsFillCircleFill} fontSize="10" marginRight="2" color="highlight.highlight"/>
          e mais...
        </Box>
      </Stack>
    )}}
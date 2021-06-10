import { Flex, Spinner as ChakraSpinner } from "@chakra-ui/react";

export function Spinner() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <ChakraSpinner color="dark.info" size="xl" my="auto"/>
    </Flex>
  );
}
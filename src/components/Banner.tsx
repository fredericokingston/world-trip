import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export function Banner() {
  return (
    <Flex
      as="section"
      w="100%"
      h={335}
      bgImg="/images/background.png"
      objectFit="cover"
      align="center"
      justify="center"
      px="8"
    >
      <Flex
        w="100%"
        maxW={1160}
        align="center"
        justify="space-between"
      >
        <Box>
          <Heading as="h1" color="light.headings-and-text" fontWeight="medium">
            5 Continentes,<br/>
            infinitas possibilidades.
          </Heading>
          <Text as="p" color="light.info" fontSize="20" mt="6">Chegou a hora de tirar do papel a viagem que você<br/>sempre sonhou.</Text>
        </Box>
        <Box marginBottom={-120}>
          <Image
            src="/images/airplane.svg"
            alt="Ilustração de um avião"
            width={418}
            height={270}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="section"
      w="100%"
      h={[200, 335]}
      bgImg="/images/background.png"
      objectFit="cover"
      align="center"
      justify="center"
      px={["4", "8"]}
    >
      <Flex
        w="100%"
        maxW={1160}
        align="center"
        justify="space-between"
      >
        <Box maxW={500}>
          <Heading as="h1" color="light.headings-and-text" fontSize={["20px", "30px"]} fontWeight="medium">
            5 Continentes,
            infinitas possibilidades.
          </Heading>
          <Text as="p" color="light.info" fontSize={["14", "20"]} mt={["4", "6"]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Box>
        {isWideVersion && (
          <Box marginBottom={-120}>
            <Image
              src="/images/airplane.svg"
              alt="Ilustração de um avião"
              width={418}
              height={270}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
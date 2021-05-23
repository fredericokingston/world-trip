import { Flex } from "@chakra-ui/react";
import Image from 'next/image'

export function Header() {
  return (
    <Flex w="100%" h={100} align="center" justify="center">
      <Image src="/logo.svg" alt="Logo World Trip" width={180} height={46}/>
    </Flex>
  );
}
import { Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/';

  return (
    <Flex w="100%" maxW={1160} h={[50, 100]} align="center" justify="center" position="relative">
      { notHomePage && (
        <Link href="/">
          <IconButton
            aria-label="Return button"
            icon={<Icon as={IoIosArrowBack}/>}
            position="absolute"
            left="0"
            bg="none"
            fontSize={[18, 28]}
          ></IconButton>
        </Link>
      )}
    
    <Image src="/logo.svg" alt="Logo World Trip" width={[81, 180]} height={[20, 46]}/>
    </Flex>
  );
}
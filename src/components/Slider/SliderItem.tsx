import { Box, Heading, Text } from "@chakra-ui/react";

interface SliderItemProps {
  coverImage: string;
  title: string;
  subtitle: string;
}

export function SliderItem({coverImage, title, subtitle}: SliderItemProps) {
  return (
    <>
      <img src={coverImage}/>
      <Box zIndex={10}>
        <Heading color="light.headings-and-text" fontSize="48" fontWeight="bold">{title}</Heading>
        <Text color="light.info" fontWeight="bold" marginTop="4">{subtitle}</Text>
      </Box>
    </>
  );
}
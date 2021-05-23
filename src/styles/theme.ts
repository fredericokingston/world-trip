import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    highlight: {
      "highlight": "#FFBA08",
    },
    dark: {
      "black": "#000000",
      "headings-and-text": "#47585B",
      "info": "#999999",
    },
    light: {
      "headings-and-text": "#F5F8FA",
      "info": "#DADADA",
    }
  },
  styles: {
    global: {
      body: {
        bg: 'light.headings-and-text',
        color: 'dark.headings-and-text',
        lineHeight: "160%",
      }
    }
  }
});

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});
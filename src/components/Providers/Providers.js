"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

function Providers({ children }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export default Providers;

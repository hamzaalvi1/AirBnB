"use client";
import { ChakraProvider } from "@chakra-ui/react";
import ToasterProvider from "./ToasterProvider";
import { SessionProvider } from "next-auth/react";
import { theme } from "@/app/styles/theme";

function Providers({ children }) {
  return (
    <SessionProvider>
      <ToasterProvider />
      <ChakraProvider resetCSS={true} theme={theme}>
        {children}
      </ChakraProvider>
    </SessionProvider>
  );
}

export default Providers;

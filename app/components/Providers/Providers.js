"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { ToasterProvider } from "../Toaster";
import { theme } from "@/app/styles/theme";

function Providers({ children }) {
  return (
    <SessionProvider>
      <ChakraProvider resetCSS={true} theme={theme}>
        <ToasterProvider/>
        {children}
      </ChakraProvider>
    </SessionProvider>
  );
}

export default Providers;

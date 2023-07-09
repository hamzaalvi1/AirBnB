"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { ToasterProvider } from "../Toaster";
import { SessionProvider } from "next-auth/react";
import { theme } from "@/app/styles/theme";

function Providers({ children }) {
  return (
    <SessionProvider basePath="/api/auth">
      <ChakraProvider resetCSS={true} theme={theme}>
        <ToasterProvider />
        {children}
      </ChakraProvider>
    </SessionProvider>
  );
}

export default Providers;

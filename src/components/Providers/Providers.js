"use client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { store } from "@/store";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS={true} theme={theme}>
        {children}
      </ChakraProvider>
    </Provider>
  );
}

export default Providers;

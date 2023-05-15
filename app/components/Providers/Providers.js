"use client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import ToasterProvider from "./ToasterProvider";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "@/app/styles/theme";
import { store, persistor } from "@/store";

function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToasterProvider />
          <ChakraProvider resetCSS={true} theme={theme}>
            {children}
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default Providers;

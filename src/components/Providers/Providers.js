"use client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import ToasterProvider from "./ToasterProvider";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "@/styles/theme";
import { store, persistor } from "@/store";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToasterProvider />
        <ChakraProvider resetCSS={true} theme={theme}>
          {children}
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default Providers;

"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { store, persistor } from "@/store";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider resetCSS={true} theme={theme}>
          {children}
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default Providers;

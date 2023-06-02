"use client";
import { useState, useEffect } from "react";
import { Spinner, Box } from "@chakra-ui/react";
function ClientRender({ children }) {
  const [isMount, setIsMount] = useState(true);
  useEffect(() => {
    setIsMount(false);
  }, []);

  return (
    <>
      {isMount ? (
        <Box
          pos={"relative"}
          width={"100%"}
          h={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primaryColor"
            size="xl"
          />
        </Box>
      ) : (
        children
      )}
    </>
  );
}

export default ClientRender;

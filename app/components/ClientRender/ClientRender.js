"use client";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
function ClientRender({ children }) {
  const [isMount, setIsMount] = useState(true);
  useEffect(() => {
    setIsMount(false);
  }, []);

  return (
    <>
      {isMount ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primaryColor"
          size="xl"
        />
      ) : (
        children
      )}
    </>
  );
}

export default ClientRender;

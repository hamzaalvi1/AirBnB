"use client";
import { Spinner, Box } from "@chakra-ui/react";
function LoadingPage() {
  return (
    <Box className="main-wrapper loading-wrapper">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primaryColor"
        size="xl"
      />
    </Box>
  );
}

export default LoadingPage;

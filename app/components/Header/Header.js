"use client";
import { Suspense } from 'react'
import { Box } from "@chakra-ui/react";
import { HeaderStyles } from "./styles";
import { Navbar } from "../Navbar";
import { Categories } from "../Categories";

function Header() {
  return (
    <Box as="header" py={2} sx={HeaderStyles}>
      <Navbar />
      <Suspense fallback={()=><>loading</>}>
      <Categories />
      </Suspense>
    </Box>
  );
}

export default Header;

"use client";
import { Box } from "@chakra-ui/react";
import { HeaderStyles } from "./styles";
import { Navbar } from "../Navbar";
import { Categories } from "../Categories";

function Header() {
  return (
    <Box as="header" py={2} sx={HeaderStyles}>
      <Navbar />
      <Categories />
    </Box>
  );
}

export default Header;

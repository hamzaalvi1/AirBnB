"use client";
import { Box } from "@chakra-ui/react";
import { HeaderStyles } from "./styles";
import { Navbar } from "../Navbar";
import { Categories } from "../Categories";
import { useToggleExplore } from "@/app/hooks";

function Header() {
  const { isToggle } = useToggleExplore();
  return (
    <Box as="header" py={2} sx={HeaderStyles}>
      <Navbar />
      {!isToggle && <Categories />}
    </Box>
  );
}

export default Header;

"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Explore } from "../Explore";
import { MainMenu } from "../MainMenu";
import { navbarStyles } from "./styles";

function Navbar() {
  return (
    <Box as="nav" sx={navbarStyles}>
      <Image
        src={"/images/logo.png"}
        width={95}
        height={"100"}
        alt="logo"
        style={{ cursor: "pointer" }}
        priority={"low"}
      />
      <Explore />
      <MainMenu />
    </Box>
  );
}

export default Navbar;

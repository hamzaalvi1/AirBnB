"use client";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { HeaderStyles } from "./styles";
import { Explore } from "../Explore";
import { MainMenu } from "../MainMenu";

function Header() {
  return (
    <Box as="header" py={2} sx={HeaderStyles} px={8}>
      <Image
        src={"/images/logo.png"}
        width={95}
        height={"100"}
        alt="logo"
        style={{cursor: "pointer"}}
        priority={"low"}
      />
      <Explore/>
      <MainMenu/>
    </Box>
  );
}

export default Header;

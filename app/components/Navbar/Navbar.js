"use client";
import { Box } from "@chakra-ui/react";
import { Explore } from "../Explore";
import { ExploreMenu } from "../ExploreMenu";
import { MainMenu } from "../MainMenu";
import { navbarStyles } from "./styles";
import Image from "next/image";
import Link from "next/link";

function Navbar(props) {
  const { isToggle } = props;
  return (
    <Box as="nav" sx={navbarStyles}>
      <Link href={"/"}>
        <Image
          src={"/images/logo.png"}
          width={95}
          height={"100"}
          alt="logo"
          style={{ cursor: "pointer" }}
          priority={"low"}
        />
      </Link>
      {!isToggle ? <Explore /> : <ExploreMenu />}
      <MainMenu />
    </Box>
  );
}

export default Navbar;

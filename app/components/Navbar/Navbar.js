"use client";
import { Box } from "@chakra-ui/react";
import { Explore } from "../Explore";
import { MainMenu } from "../MainMenu";
import { navbarStyles } from "./styles";
import { useExploreSelection } from "@/app/hooks";
import Image from "next/image";
import Link from "next/link";

function Navbar(props) {
  const { exploreDetails } = useExploreSelection();
  const { location } = exploreDetails;
  return (
    <Box
      as="nav"
      sx={navbarStyles(location ? "0.75fr 1.5fr 0.75fr" : "1fr 1fr 1fr")}
    >
      <Link href={"/"}>
        <Image
          src={"/images/logo-new.png"}
          width={130}
          height={"100"}
          alt="logo"
          style={{ cursor: "pointer" }}
          priority={"low"}
        />
      </Link>
      <Explore />
      <MainMenu />
    </Box>
  );
}

export default Navbar;

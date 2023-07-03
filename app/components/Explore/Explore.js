"use client";
import { Box, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useToggleExplore } from "@/app/hooks";
import { exploreWrapper, exploreButtons, searchButton } from "./styles";

function Explore(props) {
  const { handleToggleExplore } = useToggleExplore();
  const handleToggleClick = (e) => {
    e.stopPropagation();
    handleToggleExplore();
  };
  return (
    <Box as="div" sx={exploreWrapper} onClick={(e) => handleToggleClick(e)}>
      <Box as={"div"} sx={exploreButtons}>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Anywhere
        </Text>
      </Box>
      <Box
        as={"div"}
        sx={exploreButtons}
        borderInline={"2px solid"}
        borderColor={"borderColor"}
      >
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Any week
        </Text>
      </Box>
      <Box
        as={"div"}
        sx={exploreButtons}
        display={"flex"}
        alignItems={"center"}
      >
        <Text fontSize={"sm"} fontWeight={"semibold"} color={"darkGrey"}>
          Add guests
        </Text>
        <Box as={"span"} sx={searchButton}>
          <BiSearch size={18} />
        </Box>
      </Box>
    </Box>
  );
}

export default Explore;

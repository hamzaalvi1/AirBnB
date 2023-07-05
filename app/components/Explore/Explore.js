"use client";
import { Box, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { exploreWrapper, exploreButtons, searchButton } from "./styles";
import { useExploreModal } from "@/app/hooks";
import { ExploreModal } from "../ExploreModal";

function Explore(props) {
  const { onOpen, onClose, isToggle } = useExploreModal();
  const handleExploreModalOpen = (e) => {
    e.stopPropagation();
    onOpen();
  };
  return (
    <Box as="div" sx={exploreWrapper} onClick={handleExploreModalOpen}>
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
      {isToggle && (
        <ExploreModal
          isOpen={isToggle}
          onClose={onClose}
          title={"Explore Your Trip!"}
          onOpen={onOpen}
        />
      )}
    </Box>
  );
}

export default Explore;

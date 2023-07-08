"use client";
import { Box, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { exploreWrapper, exploreButtons, searchButton } from "./styles";
import { useExploreModal, useExploreSelection } from "@/app/hooks";
import { ExploreModal } from "../ExploreModal";
import { useSearchParams, useRouter } from "next/navigation";
import { parseQueryParams, appendQueryParams } from "@/app/utils";
import { formatISO } from "date-fns";

function Explore(props) {
  const params = useSearchParams();
  const router = useRouter();
  const { onOpen, onClose, isToggle } = useExploreModal();
  const {
    exploreDetails,
    isExploreToggle,
    onExploreToggleOpen,
    onExploreToggleClose,
    setExploreDetails,
  } = useExploreSelection();
  const { location, guests, date, bathroom, room } = exploreDetails;

  const handleExploreModalOpen = (e) => {
    e.stopPropagation();
    onOpen();
  };

  const handleUpdatedUrl = (e) => {
    e.stopPropagation();
    if (!location?.label) return;
    let currentQueryParams = params ? parseQueryParams(params) : {};
    let [startDate, endDate] = date.split("to");
    let isoStartDate = formatISO(new Date(startDate));
    let isoEndDate = formatISO(new Date(endDate));
    let updatedQueryParams = {
      ...currentQueryParams,
      locationValue: location?.value,
      guestCount: guests,
      roomCount: room,
      bathroomCount: bathroom,
      startDate: isoStartDate,
      endDate: isoEndDate,
    };
    let url = appendQueryParams(
      "/",
      updatedQueryParams,
      {},
      { skipNull: true }
    );
    router.push(url);
    onExploreToggleOpen();
  };

  const handleRemoveUrl = (e) => {
    e.stopPropagation();
    router.push("/");
    onExploreToggleClose();
    setExploreDetails({
      location: "",
      date: "",
      guests: "",
      room: "",
      bathroom: "",
    });
  };

  return (
    <Box as="div" sx={exploreWrapper} onClick={handleExploreModalOpen}>
      <Box as={"div"} sx={exploreButtons}>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          {location?.label || "Anywhere"}
        </Text>
      </Box>
      <Box
        as={"div"}
        sx={exploreButtons}
        borderInline={"2px solid"}
        borderColor={"borderColor"}
      >
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          {date || "Any week"}
        </Text>
      </Box>
      <Box
        as={"div"}
        sx={exploreButtons}
        display={"flex"}
        alignItems={"center"}
      >
        <Text fontSize={"sm"} fontWeight={"semibold"} color={"darkGrey"}>
          {guests ? `${guests} guest` : "Add guests"}
        </Text>
        <Box
          as={"span"}
          sx={searchButton}
          onClick={isExploreToggle ? handleRemoveUrl : handleUpdatedUrl}
        >
          {isExploreToggle ? <MdClose size={18} /> : <BiSearch size={18} />}
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

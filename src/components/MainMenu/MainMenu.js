"use client";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { DropDown } from "../DropDown";
import { AuthModal } from "../AuthModal";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { yourHome, mainMenuWrapper, userMenu } from "./styles";
import { isModalOpen } from "@/store/Slices/AuthModal";
import { useSelector, useDispatch } from "react-redux";

function MainMenu(props) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open, view } = useSelector((state) => state.authModal);

  const handleModalClose = () => dispatch(isModalOpen({ open: false }));
  const handleOpenModal = (title) =>
    dispatch(isModalOpen({ open: true, view: title }));
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Sign up", handleClick: (title) => handleOpenModal(title) },
    { name: "Log in", handleClick: (title) => handleOpenModal(title) },
    { name: "Airbnb your home", handleClick: () => console.log("HELLO") },
    { name: "Help", handleClick: () => console.log("HELLO") },
  ];
  const menuWrapper = () => {
    return (
      <Box as={"div"} sx={userMenu}>
        <FiMenu size={18} />
        <FaUserCircle size={26} color="#A0AEC0" />
      </Box>
    );
  };

  return (
    <>
      <Box as={"div"} sx={mainMenuWrapper}>
        <Text fontSize={"14px"} fontWeight={"bold"} sx={yourHome}>
          Airbnb your home
        </Text>
        <Box as={"span"}>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ width: "15px", cursor: "pointer" }}
          >
            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
          </svg>
        </Box>
        <DropDown
          menuItems={menuItems}
          menuButtonDetails={menuWrapper()}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          dividerCount={2}
        />
      </Box>
      {isMenuOpen && (
        <AuthModal isOpen={open} onClose={handleModalClose} title={view} />
      )}
    </>
  );
}

export default MainMenu;

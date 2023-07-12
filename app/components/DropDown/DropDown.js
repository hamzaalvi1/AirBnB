"use client";
import { forwardRef, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";

const DropDown = forwardRef(function DropDown(props, ref) {
  const {
    menuItems = [],
    styleProps,
    menuButtonDetails,
    isMenuOpen,
    toggleMenu,
    children,
    dividerCount,
  } = props;
  return (
    <Menu isLazy sx={styleProps}>
      <MenuButton
        ref={ref}
        as={"button"}
        onClick={() => {
          toggleMenu();
        }}
      >
        {menuButtonDetails}
      </MenuButton>
      {isMenuOpen && (
        <MenuList>
          {menuItems.map((items, idx) => (
            <Box key={idx}>
              <MenuItem onClick={() => items.handleClick(items.name)}>
                {items.name}
              </MenuItem>
              {dividerCount &&
                idx % dividerCount === 1 &&
                idx !== menuItems.length - 1 && (
                  <MenuDivider border={"1px solid"} borderColor={"lightGrey"} />
                )}
            </Box>
          ))}
        </MenuList>
      )}
      {children}
    </Menu>
  );
});

export default DropDown;

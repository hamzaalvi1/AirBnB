"use client";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

const DropDown = (props) => {
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
      <MenuButton as={"button"} onClick={toggleMenu}>
        {menuButtonDetails}
      </MenuButton>
      {isMenuOpen && (
        <MenuList>
          {menuItems.map((items, idx) => (
            <>
              <MenuItem key={idx} onClick={items.handleClick}>
                {items.name}
              </MenuItem>
              {dividerCount &&
                idx % dividerCount === 1 &&
                idx !== menuItems.length - 1 && (
                  <MenuDivider border={"1px solid"} borderColor={"lightGrey"} />
                )}
            </>
          ))}
        </MenuList>
      )}
      {children}
    </Menu>
  );
};

export default DropDown;

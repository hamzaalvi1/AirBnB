"use client";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";


function DropDown() {
  return (
    <Menu isLazy>
      <MenuButton>Open menu</MenuButton>
      <MenuList>
        {/* MenuItems are not rendered unless Menu is open */}
        <MenuItem>New Window</MenuItem>
        <MenuItem>Open Closed Tab</MenuItem>
        <MenuItem>Open File</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DropDown;

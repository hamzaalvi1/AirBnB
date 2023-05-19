"use client";
import { Box } from "@chakra-ui/react";
import { categoryBoxStyles } from "./RentModalStyles";
function CategoryBox(props) {
  const { label, icon: Icon } = props;
  return (
    <Box sx={categoryBoxStyles}>
      <Icon size={22} />
      <Box as={"span"} fontSize={"sm"} fontWeight={"bold"}>
        {" "}
        {label}
      </Box>
    </Box>
  );
}

export default CategoryBox;

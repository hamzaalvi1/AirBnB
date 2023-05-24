"use client";
import { Box } from "@chakra-ui/react";
import { categoryBoxStyles, selectedStyles } from "../RentModalStyles";
import { RentConstants } from "@/app/config/constants";

function CategoryBox(props) {
  const { label, icon: Icon, handleValuesChange, selected } = props;

  return (
    <Box
      sx={{ ...categoryBoxStyles, ...(selected && selectedStyles) }}
      onClick={() => handleValuesChange(RentConstants.CATEGORY, label)}
    >
      <Icon size={22} />
      <Box as={"span"} fontSize={"sm"} fontWeight={"bold"}>
        {" "}
        {label}
      </Box>
    </Box>
  );
}

export default CategoryBox;

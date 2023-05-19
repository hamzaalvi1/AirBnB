"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";
import { categoriesList } from "@/app/components/Categories";
import { categoriesListStyles } from "./RentModalStyles";

import CategoryBox from "./CategoryBox";

function Category(props) {
  return (
    <Box as="div" my="1rem">
      <RentHeading
        heading={"Which of these best describes your place"}
        paragraph={"Pick a category"}
      />
      <Box as={"div"} sx={categoriesListStyles}>
        {categoriesList.map(({ label, icon }) => {
          return <CategoryBox label={label} icon={icon} key={label} />;
        })}
      </Box>
    </Box>
  );
}

export default Category;

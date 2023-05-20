"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";
import { categoriesList } from "@/app/components/Categories";
import { categoriesListStyles } from "./RentModalStyles";
import { FormikErrorText } from "../FormikErrorText";

import CategoryBox from "./CategoryBox";

function Category(props) {
  const { handleValuesChange, values, errors } = props;

  return (
    <Box as="div" mt="1rem">
      <RentHeading
        heading={"Which of these best describes your place"}
        paragraph={"Pick a category"}
      />
      <Box as={"div"} sx={categoriesListStyles}>
        {categoriesList.map(({ label, icon }) => {
          return (
            <CategoryBox
              handleValuesChange={handleValuesChange}
              label={label}
              icon={icon}
              key={label}
              selected={values.category == label}
            />
          );
        })}
      </Box>
      <Box as="span" display={"block"} textAlign={"center"}>
        <FormikErrorText
          fieldName="category"
          errorObj={errors}
          fontSize={"15px"}
          margin={"10px 0 0"}
          fontWeight={"black"}
          padding={0}
        />
      </Box>
    </Box>
  );
}

export default Category;

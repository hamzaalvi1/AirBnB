"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "../RentContent";
import { Input } from "../../Input";
import { RentConstants } from "@/app/config/constants";
import { ImCoinDollar } from "react-icons/im";

function Price(props) {
  const { values, errors, handleValuesChange } = props;
  return (
    <Box as="div" mt="1rem">
      <RentHeading
        heading="Now set your price"
        paragraph="How much you charge per day"
      />
      <Input
        errorTextStyle={{ fontWeight: "black", marginLeft: "5px" }}
        name={RentConstants.PRICE}
        placeholder="Price"
        value={values.price}
        type="text"
        isInvalid={errors.price}
        error={errors.price}
        errorText={"price is mandatory field."}
        InputLeftElements={ImCoinDollar}
        isCustomInput={true}
        onChange={(e) =>
          handleValuesChange(RentConstants.PRICE, e.target.value)
        }
      />
    </Box>
  );
}

export default Price;

"use client";
import { Input } from "../../Input";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "../RentContent";
import { ImCoinDollar } from "react-icons/im";
import { RentConstants } from "@/app/config/constants";
import { FormikErrorText } from "../../FormikErrorText";

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
      <FormikErrorText
        fieldName={RentConstants.PRICE}
        errorObj={errors}
        fontSize={"15px"}
        margin={"10px 0 0"}
        fontWeight={"black"}
        padding={0}
      />
    </Box>
  );
}

export default Price;

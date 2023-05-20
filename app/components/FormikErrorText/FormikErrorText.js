import { Text } from "@chakra-ui/react";
import { FormikErrorStyles } from "./FormikErrorStyles";

const FormikErrorText = (props) => {
  let { fieldName, errorObj, ...rest } = props;
  console.log({...rest});

  return (
    <>
      {errorObj[fieldName] && (
        <Text as={"p"} sx={FormikErrorStyles} {...rest}>
          {errorObj[fieldName]}
        </Text>
      )}
    </>
  );
};

export default FormikErrorText;

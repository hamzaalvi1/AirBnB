import { Heading, Text } from "@chakra-ui/react";

export const RentHeading = (props) => {
  const { heading, paragraph } = props;
  return (
    <>
      <Heading
        variant={"primary"}
        fontSize={"lg"}
        my={"5px"}
        fontWeight={"bold"}
      >
        {heading}
      </Heading>
      <Text fontSize={13} as={"p"} my={"10px"} textStyle="secondary">
        {paragraph}
      </Text>
    </>
  );
};

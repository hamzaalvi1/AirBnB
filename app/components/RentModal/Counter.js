"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { counterButton } from "./RentModalStyles";

function Counter(props) {
  const { title, subtitle, value, handleValuesChange, propertyCount } = props;

  const handleOnReduce = () => {
    if (value <= 1) {
      return;
    }
    handleValuesChange(propertyCount, value - 1);
  };
  const handleOnAdd = () => {
    handleValuesChange(propertyCount, value + 1);
  };

  return (
    <Flex as="div" align={"center"} justify={"space-between"} my={"0.5rem"}>
      <Flex flexFlow={"column"} as="div">
        <Box as="div" my={"0.5"}>
          <Heading
            as="h4"
            variant={"primary"}
            fontSize={"md"}
            mt={"5px"}
            fontWeight={"bold"}
            mb={0}
          >
            {title}
          </Heading>
          <Text
            fontSize={"xs"}
            as={"p"}
            my={"5px"}
            textStyle="secondary"
            color={"gray.500"}
          >
            {subtitle}
          </Text>
        </Box>
      </Flex>
      <Flex align={"center"} gap={"10px"}>
        <Box sx={counterButton} onClick={handleOnReduce}>
          <AiOutlineMinus color="#718096" />
        </Box>
        <Box as={"span"}>{value}</Box>
        <Box sx={counterButton} onClick={handleOnAdd}>
          <AiOutlinePlus color="#718096" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Counter;

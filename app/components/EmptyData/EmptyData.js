"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
function EmptyData(props) {
  const {
    heading ="No Data Yet!",
    paragraph = "Please reset your filters",
    showReset,
    resetHandler,
    buttonTitle = "reset",
  } = props;
  const router = useRouter();
  return (
    <Box>
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
      {showReset && (
        <Button
          fontWeight={"bold"}
          title={buttonTitle}
          type="button"
          variant={"secondary"}
          handleClick={resetHandler ? resetHandler : () => router.push("/")}
        />
      )}
    </Box>
  );
}

export default EmptyData;

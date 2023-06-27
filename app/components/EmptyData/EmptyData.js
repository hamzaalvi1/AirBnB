"use client";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
function EmptyData(props) {
  const {
    heading = "No Data Yet!",
    paragraph = "Please reset your filters or refresh your page",
    showReset,
    resetHandler,
    classes = "",
    buttonTitle = "Reset",
  } = props;
  const router = useRouter();
  return (
    <Flex
      as="div"
      align={"center"}
      justify={"center"}
      width={"100%"}
      height={"100%"}
      flexFlow={"column"}
      className={classes ? classes : ""}
    >
      <Heading
        variant={"primary"}
        fontSize={"2xl"}
        mb={"5px"}
        fontWeight={"bold"}
      >
        {heading}
      </Heading>
      <Text fontSize={"md"} as={"p"} mb={"5px"} textStyle="secondary">
        {paragraph}
      </Text>
      {showReset && (
        <Button
          fontWeight={"bold"}
          title={buttonTitle}
          type="button"
          variant={"secondary"}
          margin={"5px 0"}
          width={"200px"}
          display="inline-block"
          handleClick={resetHandler ? resetHandler : () => router.push("/")}
        />
      )}
    </Flex>
  );
}

export default EmptyData;

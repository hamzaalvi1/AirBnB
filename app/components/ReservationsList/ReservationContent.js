"use client";
import { Text, Heading, Box } from "@chakra-ui/react";
function ReservationContent(props) {
  const { heading, text } = props;
  return (
    <Box
      as={"div"}
      paddingLeft={10}
      sx={{ "@media(max-width:575px)": { padding: 0 } }}
    >
      {" "}
      <Heading
        variant={"primary"}
        fontSize={"2xl"}
        mb={"5px"}
        fontWeight={"bold"}
        as={"h2"}
      >
        {heading}
      </Heading>
      <Text fontSize={14} as={"p"} mb={"15px"} textStyle="secondary">
        {text}
      </Text>
    </Box>
  );
}

export default ReservationContent;

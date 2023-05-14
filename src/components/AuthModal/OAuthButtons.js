import { Flex } from "@chakra-ui/react";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
function OAuthButtons() {
  return (
    <Flex as={"div"} flexFlow={"column"}>
      <Button
        fontWeight="bold"
        textStyle="secondary"
        variant={"oAuth"}
        title="Continue with Google"
        // loading={oAuthLoading.google}
        leftIcon={
          <FcGoogle
            size={24}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        }
      />
      <Button
        fontWeight="bold"
        textStyle="secondary"
        variant={"oAuth"}
        title="Continue with Github "
        leftIcon={
          <FaGithub
            size={24}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        }
      />
    </Flex>
  );
}

export default OAuthButtons;

import { Flex } from "@chakra-ui/react";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
function OAuthButtons() {
  return (
    <Flex as={"div"} flexFlow={"column"}>
      <Button
        fontWeight="bold"
        textStyle="secondary"
        variant={"oAuth"}
        title="Continue with Google"
        handleClick={() => signIn("google", { redirect: false })}
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
        handleClick={() => signIn("github", { redirect: false })}
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

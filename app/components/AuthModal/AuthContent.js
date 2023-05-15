import { Heading, Text } from "@chakra-ui/react";

export const AuthHeadings = (props) => {
  const { view, AuthConstants } = props;
  return (
    <>
      <Heading variant={"primary"} my={"5px"} fontWeight={"bold"}>
        {view == AuthConstants.SIGNUP ? "Welcome to Airbnb" : "Welcome Back"}
      </Heading>
      <Text fontSize={13} as={"p"} my={"10px"} textStyle="secondary">
        {view == AuthConstants.SIGNUP
          ? "Create an Account"
          : "Login to your account!"}
      </Text>
    </>
  );
};

export const AuthBottomTextContent = (props) => {
  const { view, AuthConstants, toggleModal } = props;

  return view == AuthConstants.SIGNUP ? (
    <Text fontSize={"sm"} textAlign={"center"} textStyle="secondary">
      Already have an account ?{" "}
      <Text
        fontWeight={"bold"}
        as={"span"}
        color={"blue.500"}
        cursor={"pointer"}
        onClick={() => toggleModal(AuthConstants.LOGIN)}
      >
        Log In
      </Text>
    </Text>
  ) : (
    <Text
      fontSize={"sm"}
      textAlign={"center"}
      textStyle="secondary"
      cursor={"pointer"}
    >
      Don&#180;t have an account ?{" "}
      <Text
        fontWeight={"bold"}
        as={"span"}
        color={"blue.500"}
        cursor={"pointer"}
        onClick={() => toggleModal(AuthConstants.SIGNUP)}
      >
        Sign Up
      </Text>
    </Text>
  );
};

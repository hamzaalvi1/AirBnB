import { signIn } from "next-auth/react";
import { successLogger, errorLogger } from "../components/Toaster";

const loginUserWithCredentials = async (params) => {
  const { values } = params;
  try {
    const getCredentials = await signIn("credentials", {
      ...values,
    });
    if (getCredentials?.ok && getCredentials?.status == 200) {
      successLogger("Logged in");
      return { success: true };
    }
  } catch (err) {
    errorLogger(err);
    return { success: false };
  }
};

export default loginUserWithCredentials;

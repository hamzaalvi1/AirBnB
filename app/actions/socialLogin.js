import { signIn } from "next-auth/react";

const loginWithSocialAccounts = async (params) => {
  const { accountType } = params;
  console.log(accountType, "accountType");
  try {
    const getCredentials = await signIn(accountType, { redirect: false });
  } catch (err) {
    console.log(err);
  }
};

export default loginWithSocialAccounts;

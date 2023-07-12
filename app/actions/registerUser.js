import { fetchAPI } from "../utils";
import { ApiMethodsConstants, AuthConstants } from "../config/constants";
import { AuthRoutes } from "../config/api-routes";
import { successLogger, errorLogger } from "../components/Toaster";

const registerUser = async (registerParams) => {
  const { values, setSubmitting, resetForm, onOpen } = registerParams;
  const apiParams = {
    url: AuthRoutes.SIGN_UP,
    method: ApiMethodsConstants.POST,
    data: values,
  };

  try {
    const user = await fetchAPI(apiParams);
    if (user?.data?.status == 200) {
      successLogger(user?.data?.message);
      setSubmitting(false);
      resetForm();
      onOpen({ title: AuthConstants.LOGIN });
    }
  } catch (err) {
    console.log(err.message);
    errorLogger(err);
  }
};

export default registerUser;

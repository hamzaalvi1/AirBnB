import { fetchAPI } from "../utils";
import { ListingRoutes } from "../config/api-routes";
import { ApiMethodsConstants } from "../config/constants";
import { successLogger, errorLogger } from "../components/Toaster";

const addList = async (params) => {
  const { values, setSubmitting, resetForm, onClose } = params;

  const apiParams = {
    url: ListingRoutes.ADD_LISTINGS,
    method: ApiMethodsConstants.POST,
    data: values,
  };
  try {
    const list = await fetchAPI(apiParams);
    if (list?.status == 201) {
      successLogger(list?.data?.message);
      resetForm();
      onClose();
    }
  } catch (err) {
    console.log(err);
    errorLogger(err?.message);
  } finally {
    setSubmitting(false);
  }
};

export default addList;

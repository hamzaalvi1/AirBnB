import { fetchAPI } from "../utils";
import { ListingRoutes } from "../config/api-routes";
import { ApiMethodsConstants } from "../config/constants";
import { successLogger, errorLogger } from "../components/Toaster";

const getAllList = async (params) => {
  const { values, setSubmitting, resetForm } = params;
  
  const apiParams = {
    url: ListingRoutes.ADD_LISTINGS,
    method: ApiMethodsConstants.POST,
    data: values,
  };
  try {
    const list = await fetchAPI(apiParams);
    if (list?.data?.status == 201) {
      successLogger(list?.data?.message);
      resetForm();
    }
  } catch (err) {
    console.log(err);
    errorLogger(err);
  } finally {
    setSubmitting(false);
  }
};

export default getAllList;

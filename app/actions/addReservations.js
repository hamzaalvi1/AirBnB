import { fetchAPI } from "../utils";
import { ApiMethodsConstants } from "../config/constants";
import { ReservationsRoutes } from "../config/api-routes";
import { successLogger, errorLogger } from "../components/Toaster";

const addReservations = async (params) => {
  console.log(params, "params");
  const apiParams = {
    url: ReservationsRoutes.ADD_RESERVATIONS,
    method: ApiMethodsConstants.POST,
    data: params,
  };

  try {
    const reservations = await fetchAPI(apiParams);
    console.log(reservations, "reservations");
    if (reservations?.data?.status == 200) {
    }
  } catch (err) {
    console.log(err);
    errorLogger(err?.response?.statusText);
  }
};

export default addReservations;

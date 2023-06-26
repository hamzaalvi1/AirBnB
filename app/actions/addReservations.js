import { fetchAPI } from "../utils";
import { ApiMethodsConstants } from "../config/constants";
import { ReservationsRoutes } from "../config/api-routes";
import { successLogger, errorLogger } from "../components/Toaster";

const addReservations = async (params, paramsFunctions) => {
  const { refresh, setLoading } = paramsFunctions;
  const apiParams = {
    url: ReservationsRoutes.ADD_RESERVATIONS,
    method: ApiMethodsConstants.POST,
    data: params,
  };
  setLoading(true);
  try {
    const reservations = await fetchAPI(apiParams);
    if (reservations?.status == 201) {
      successLogger(reservations?.data?.message);
      refresh();
    }
  } catch (err) {
    console.log(err);
    errorLogger(err?.response?.statusText);
  } finally {
    setLoading(false);
  }
};

export default addReservations;

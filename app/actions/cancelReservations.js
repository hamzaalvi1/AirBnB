import { fetchAPI } from "../utils";
import { ApiMethodsConstants } from "../config/constants";
import { ReservationsRoutes } from "../config/api-routes";
import { successLogger, errorLogger } from "../components/Toaster";

const cancelReservations = async (params, paramsFunctions) => {
  const { setLoading, refresh } = paramsFunctions;
  const apiParams = {
    url: `${ReservationsRoutes.ADD_DELETE_RESERVATIONS}/${params.reservationId}`,
    method: ApiMethodsConstants.DELETE,
    data: {},
  };
  setLoading(true);
  try {
    const deleteReservations = await fetchAPI(apiParams);
    if (deleteReservations?.status == 200) {
      successLogger(deleteReservations?.data?.message);
      refresh();
    }
  } catch (err) {
    console.log(err);
    errorLogger(err?.response?.statusText);
  } finally {
    setLoading(false);
  }
};

export default cancelReservations;

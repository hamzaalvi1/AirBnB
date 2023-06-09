import { fetchAPI } from "../utils";
import { FavoriteRoutes } from "../config/api-routes";
import { ApiMethodsConstants } from "../config/constants";
import { successLogger, errorLogger } from "../components/Toaster";

const addFavorites = async ({ listingId, currentUser, type, refresh }) => {
  try {
    if (!currentUser) {
      errorLogger("please login to add favorites");
      return;
    }
    const apiParams = {
      url: `${FavoriteRoutes.ADD_FAVORITE}/${listingId}`,
      method:
        type == ApiMethodsConstants.DELETE
          ? ApiMethodsConstants.DELETE
          : ApiMethodsConstants.POST,
      data: { listingId },
    };
    const favorite = await fetchAPI(apiParams);
    if (favorite?.status == 200) {
      successLogger(favorite?.statusText);
      refresh();
    }
  } catch (err) {
    console.log(err);
    errorLogger(err?.response?.statusText);
  }
};

export default addFavorites;

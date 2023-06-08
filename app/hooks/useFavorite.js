import { addFavorites, removeFavorites } from "../actions";

const useFavorite = ({ currentUser, listingId }) => {
  const hasFavorite = currentUser?.favoriteIds?.includes(listingId);
  console.log(hasFavorite,"hasFavorite")
  console.log("hook called");
  let request;
  if (!hasFavorite) {
    console.log("if called");
    request = () => {
      addFavorites({ currentUser, listingId });
    };
  } else {
    console.log("else called");
    request = () => {
      removeFavorites({ currentUser, listingId });
    };
  }

  return {
    hasFavorite,
    request,
  };
};

export default useFavorite;

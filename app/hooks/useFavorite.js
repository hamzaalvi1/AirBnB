import { useMemo } from "react";
const useFavorite = ({ currentUser, listingId }) => {
  const hasFavorite = useMemo(() => {
    return currentUser?.favoriteIds?.includes(listingId);
  }, [currentUser, listingId]);
  return {
    hasFavorite,
  };
};

export default useFavorite;

"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ApiMethodsConstants } from "@/app/config/constants";
import { addFavorites } from "@/app/actions";
import { useFavorite } from "@/app/hooks";
import { useRouter } from "next/navigation";

import styles from "./favorite.module.css";
function Favorite(props) {
  const { favoriteId, currentUser } = props;
  const { hasFavorite } = useFavorite({ currentUser, listingId: favoriteId });
  const { refresh } = useRouter();
  const handleAddDeleteFavorite = async (type) => {
    const response = await addFavorites({
      listingId: favoriteId,
      currentUser,
      type: type,
      refresh,
    });
  };
  return hasFavorite ? (
    <BsHeart
      size={22}
      className={styles["favorite-icon"]}
      onClick={() => handleAddDeleteFavorite(ApiMethodsConstants.POST)}
    />
  ) : (
    <BsHeartFill
      size={22}
      className={styles["favorite-icon"]}
      onClick={() => handleAddDeleteFavorite(ApiMethodsConstants.DELETE)}
    />
  );
}

export default Favorite;

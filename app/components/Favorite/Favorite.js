"use client";
import { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ApiMethodsConstants } from "@/app/config/constants";
import { addFavorites } from "@/app/actions";
import { useRouter } from "next/navigation";

import styles from "./favorite.module.css";
function Favorite(props) {
  const { favoriteId, currentUser } = props;
  const [hasFavorite, setHasFavorite] = useState(false);
  const { refresh } = useRouter();
  useEffect(() => {
    if (
      currentUser &&
      currentUser?.favoriteIds.length > 0 &&
      currentUser.favoriteIds.includes(favoriteId)
    ) {
      setHasFavorite(true);
    }
  }, []);

  const handleAddDeleteFavorite = async (e, type) => {
    e.stopPropagation();
    const response = await addFavorites({
      listingId: favoriteId,
      currentUser,
      type: type,
      refresh,
    });
    setHasFavorite(!hasFavorite);
  };
  return hasFavorite ? (
    <BsHeartFill
      size={22}
      className={`${styles["favorite-icon"]} ${styles["favorite-filled-icon"]}`}
      onClick={(e) => handleAddDeleteFavorite(e, ApiMethodsConstants.DELETE)}
    />
  ) : (
    <BsHeart
      size={22}
      className={styles["favorite-icon"]}
      onClick={(e) => handleAddDeleteFavorite(e, ApiMethodsConstants.POST)}
    />
  );
}

export default Favorite;

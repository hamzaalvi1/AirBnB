"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addFavorites } from "@/app/actions";
import { useFavorite } from "@/app/hooks";
import styles from "./favorite.module.css";
function Favorite(props) {
  const { favoriteId, currentUser } = props;
  const { hasFavorite, request } = useFavorite({
    listingId: favoriteId,
    currentUser,
  });
  const handleAddToFavorite = async () => {
    console.log(favoriteId, "favoriteId");
    request()
  };
  return (
    <BsHeart
      size={22}
      className={styles["favorite-icon"]}
      onClick={handleAddToFavorite}
    />
  );
}

export default Favorite;

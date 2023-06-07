"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addFavorites } from "@/app/actions";
import styles from "./favorite.module.css";
function Favorite(props) {
  const { favoriteId, currentUser } = props;
  const handleAddToFavorite = async () => {
    console.log(favoriteId,"favoriteId")
    const favorite = await addFavorites({
      listingId: favoriteId,
      currentUser,
    });
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

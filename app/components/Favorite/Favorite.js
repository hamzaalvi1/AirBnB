"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styles from "./favorite.module.css";
function Favorite(props) {
  const { favoriteId } = props;
  return <BsHeart size={22} className={styles["favorite-icon"]} />;
}

export default Favorite;

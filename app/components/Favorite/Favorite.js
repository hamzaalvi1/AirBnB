"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styles from "./favorite.module.css"
function Favorite() {
  return <BsHeart size={18} className={styles["favorite-icon"]}/>;
}

export default Favorite;

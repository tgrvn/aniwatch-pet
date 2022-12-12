import React from "react";
import styles from "./AnimeCard.module.css";

export default function AnimeCard() {
  return (
    <div className={styles.card}>
      <div className={styles.coverLoading + " " + styles.loader}></div>
      <div className={styles.titleLoading + " " + styles.loader}></div>
    </div>
  );
}

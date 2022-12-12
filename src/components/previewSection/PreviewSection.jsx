import React from "react";
import styles from "./PreviewSection.module.css";
import AnimeCard from "../animeCard/AnimeCard";

export default function PreviewSection() {
  const cards = [1, 2, 3, 4, 5];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.head}>test head</h2>
        <div className={styles.view}>view all</div>
      </div>

      <div className={styles.cards}>
        {cards && cards.map((c) => <AnimeCard key={c} />)}
      </div>
    </section>
  );
}
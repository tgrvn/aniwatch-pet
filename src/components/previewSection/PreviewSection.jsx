import React from "react";
import { AnimeCard } from "components";
import styles from "./PreviewSection.module.css";

export default function PreviewSection() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.head}>test head</h2>
        <div className={styles.view}>view all</div>
      </div>

      <div className={styles.cards}>
        {cards &&
          cards.map((c) => <AnimeCard className={styles.card} key={c} />)}
      </div>
    </section>
  );
}

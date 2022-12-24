import React from "react";
import styles from "./SecondaryFilters.module.css";

export default function SecondaryFilters({ filters, setFilters }) {
  return (
    <div className={styles.secondary}>
      <div className={styles.filters}>
        <div className={styles.icon}></div>
        <div className={styles.active}>
          {filters.searchQuerry && (
            <div
              className={styles.button}
              onClick={() => setFilters({ ...filters, searchQuerry: "" })}
            >
              {filters.searchQuerry}
              <span className={styles.buttonClear}></span>
            </div>
          )}
          {filters.year && (
            <div
              className={styles.button}
              onClick={() => setFilters({ ...filters, year: "" })}
            >
              {filters.year}
              <span className={styles.buttonClear}></span>
            </div>
          )}
          {filters.seasons && (
            <div
              className={styles.button}
              onClick={() => setFilters({ ...filters, seasons: "" })}
            >
              {filters.seasons}
              <span className={styles.buttonClear}></span>
            </div>
          )}
          {filters.format && (
            <div
              className={styles.button}
              onClick={() => setFilters({ ...filters, format: "" })}
            >
              {filters.format}
              <span className={styles.buttonClear}></span>
            </div>
          )}
          {filters.genres &&
            filters.genres.map((g) => (
              <div
                className={styles.button}
                key={g}
                onClick={() =>
                  setFilters({
                    ...filters,
                    genres: [...filters.genres].filter((gen) => gen !== g),
                  })
                }
              >
                {g}
                <span className={styles.buttonClear}></span>
              </div>
            ))}
          <div
            className={styles.clearAll}
            onClick={() =>
              setFilters({
                ...filters,
                searchQuerry: "",
                genres: [],
                year: "",
                seasons: "",
                format: "",
              })
            }
          >
            Clear
            <span className={styles.clearIcon}></span>
          </div>
        </div>
      </div>
      <div className={styles.setings}>
        <div className={styles.icons}></div>
        <div className={styles.chart}></div>
        <div className={styles.table}></div>
      </div>
    </div>
  );
}

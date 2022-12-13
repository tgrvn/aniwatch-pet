import React from "react";
import styles from "./SearchField.module.css";

export default function SearchField({ head, value, setValue, ...rest }) {
  function handleClear() {
    if (!value.length) return;
    setValue("");
  }

  return (
    <div className={"search"}>
      <div className={"head"}>{head}</div>
      <div className={`${styles["search__wrap"]} search__wrap`}>
        <input
          className={`search__item ${styles.loop}`}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          {...rest}
        ></input>
        <div
          onClick={handleClear}
          className={`search__item__icon-right ${value.length && styles.clear}`}
        ></div>
      </div>
    </div>
  );
}

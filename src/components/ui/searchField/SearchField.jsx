import React from "react";
import styles from "./SearchField.module.css";

export default function SearchField({ head, value, setValue, ...rest }) {
  return (
    <div className={"search"}>
      <div className={"head"}>{head}</div>
      <div className={`${styles["search__wrap"]} search__wrap`}>
        {value.length ? (
          <div
            onClick={() => setValue("")}
            className={`search__item__icon-right ${styles.clear}`}
          ></div>
        ) : (
          ""
        )}
        <input
          className={`search__item ${styles.loop}`}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          {...rest}
        ></input>
      </div>
    </div>
  );
}

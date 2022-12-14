import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useClickOutside, useSearch } from "hooks";
import styles from "./SearchSelect.module.css";

export default function SearchSelect({
  head,
  options,
  value,
  setValue,
  removeValue = null,
  search = false,
  multiply = false,
  clear = null,
  disabled,
}) {
  const [optionVisible, setOptionVisible] = useState(false);
  const [multiplyVisible, setMultiplyVisible] = useState(multiply);
  const [selected, setSelected] = useState(value);
  const [searchQuerry, setSearchQuerry] = useState("");
  const [optionsState, setOptionsState] = useState([]);
  const optionsRef = useRef();
  const inputRef = useRef();
  const multiplyRef = useRef();

  useEffect(() => {
    setOptionsState([...options]);
  }, [options]);

  function handleSelect(e) {
    e.stopPropagation();

    if (!multiply) {
      if (e.target.innerText === selected || e.target.innerText === value) {
        setSearchQuerry("");
        setSelected("");
        setValue("");
        setOptionVisible(false);
        return;
      }

      setValue(e.target.innerText);
      setSelected(e.target.innerText);
      setSearchQuerry("");
      setOptionVisible(false);
      return;
    }

    if (!value.includes(e.target.innerText)) {
      setValue(e.target.innerText);
      setSearchQuerry("");
      setMultiplyVisible(true);
    } else {
      removeValue(e.target.innerText);
      setSearchQuerry("");
      setMultiplyVisible(true);
    }
  }

  const filtered = useSearch(optionsState, searchQuerry);

  useClickOutside(inputRef, () => {
    setSelected(value);
    setSearchQuerry("");
    setMultiplyVisible(true);
    setOptionVisible(false);
  });

  function handleClear(e) {
    e.stopPropagation();

    if (typeof value === "string") {
      setSelected("");
      setValue("");
      setOptionVisible(false);
    }

    if (typeof value === "object") {
      clear();
    }
  }

  return (
    <div className={"search"}>
      <div className={"head"}>{head}</div>
      <div
        ref={inputRef}
        onClick={() => setOptionVisible(true)}
        className={`search__wrap`}
      >
        {search && multiply ? (
          <input
            className={"search__item"}
            onChange={(e) => setSearchQuerry(e.target.value)}
            onFocus={() => {
              setMultiplyVisible(false);
            }}
            value={searchQuerry}
            placeholder={"Any"}
          />
        ) : (
          <input
            className={`search__item ${disabled && styles.pointer}`}
            onChange={(e) => setSearchQuerry(e.target.value)}
            onClick={() => setSelected("")}
            placeholder={"Any"}
            value={selected ? selected : searchQuerry}
            disabled={disabled}
          />
        )}

        {value.length > 0 ? (
          <div
            onClick={handleClear}
            className={`search__item__icon-right ${styles.clear}`}
          ></div>
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOptionVisible(!optionVisible);
            }}
            className={`search__item__icon-right ${styles.down}`}
          ></div>
        )}

        {multiplyVisible && value.length && multiply ? (
          <div
            onClick={() => removeValue(value[0])}
            ref={multiplyRef}
            className={styles.multiply}
          >
            <div className={styles.multiplyName}>{value[0]}</div>
            <div className={styles.multiplyCount}>{value.length}</div>
          </div>
        ) : (
          ""
        )}

        <CSSTransition
          in={optionVisible}
          nodeRef={optionsRef}
          timeout={500}
          classNames={"fade"}
          unmountOnExit
        >
          <div ref={optionsRef} className={styles.options}>
            {filtered &&
              filtered.map((o, i) => (
                <div onClick={handleSelect} className={styles.option} key={i}>
                  {o}
                  {value === o ? <span className={styles.selected}></span> : ""}
                  {value.includes(o) && multiply ? (
                    <span className={styles.selected}></span>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

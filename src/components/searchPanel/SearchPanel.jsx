import React, { useState } from "react";
import SearchField from "../ui/searchField/SearchField";
import SearchSelect from "../ui/searchSelect/SearchSelect";
import styles from "./SearchPanel.module.css";

export default function SearchPanel() {
  const [filtersHidden, setFiltersHidden] = useState(true);
  const optionsForGenre = ["Action", "Comedy", "OVA", "Drama"];
  const optionsForYear = ["2022", "2021", "2020", "2019", "2018"];
  const optionsForSeasons = ["Winter", "Summer", "Spring", "Fall"];
  const optionsForFormat = ["TV", "OVA", "Serial", "Film"];

  const [filters, setFilters] = useState({
    searchQuerry: "",
    genres: [],
    year: "",
    seasons: "",
    format: "",
  });

  return (
    <div className={styles.panel}>
      <div className={styles.search}>
        <SearchField
          head={"Search"}
          value={filters.searchQuerry}
          setValue={(value) => setFilters({ ...filters, searchQuerry: value })}
        />
        <div
          onClick={() => setFiltersHidden(!filtersHidden)}
          className={`${styles.switcher} ${!filtersHidden && styles.active}`}
        ></div>
      </div>

      <div className={`${styles.filters} ${filtersHidden && styles.hidden}`}>
        <SearchSelect
          head={"Genres"}
          options={optionsForGenre}
          setValue={(value) =>
            setFilters({ ...filters, genres: [...filters.genres, value] })
          }
          removeValue={(value) =>
            setFilters({
              ...filters,
              genres: [...filters.genres].filter((g) => g !== value),
            })
          }
          clear={() => setFilters({ ...filters, genres: [] })}
          value={filters.genres}
          search={true}
          multiply={true}
        />
        <SearchSelect
          head={"Year"}
          options={optionsForYear}
          setValue={(value) => setFilters({ ...filters, year: value })}
          value={filters.year}
          search={true}
        />
        <SearchSelect
          head={"Seasons"}
          options={optionsForSeasons}
          setValue={(value) => setFilters({ ...filters, seasons: value })}
          value={filters.seasons}
          disabled={true}
        />
        <SearchSelect
          head={"Format"}
          options={optionsForFormat}
          setValue={(value) => setFilters({ ...filters, format: value })}
          value={filters.format}
          disabled={true}
        />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { SecondaryFilters, PreviewSection, SearchPanel } from "components";

export default function SearchAnime() {
  const [filters, setFilters] = useState({
    searchQuerry: "",
    genres: [],
    year: "",
    seasons: "",
    format: "",
  });

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(Object.values(filters).some((f) => f.length > 0));
  }, [filters]);

  return (
    <div>
      <SearchPanel filters={filters} setFilters={setFilters} />

      {isSearching && (
        <SecondaryFilters filters={filters} setFilters={setFilters} />
      )}

      {!isSearching && <PreviewSection />}
    </div>
  );
}

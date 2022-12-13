import React, { useEffect, useState } from "react";
import ActiveFilters from "../../components/activeFilters/ActiveFilters";
import PreviewSection from "../../components/previewSection/PreviewSection";
import SearchPanel from "../../components/searchPanel/SearchPanel";

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

      {isSearching && <ActiveFilters />}

      {!isSearching && <PreviewSection />}
    </div>
  );
}

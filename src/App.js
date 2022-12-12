import React from "react";
import PreviewSection from "./components/previewSection/PreviewSection";
import SearchAnime from "./pages/searchAnime/SearchAnime";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SearchAnime />
        <PreviewSection />
      </div>
    </div>
  );
}

export default App;

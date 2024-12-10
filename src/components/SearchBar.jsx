import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="w-2/3 p-2 border rounded-l-lg focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

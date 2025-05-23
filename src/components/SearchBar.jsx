import React, { useState } from "react";

const SearchBar = ({ onSearch, placeholder = "Search projects..." }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full flex items-center justify-center mb-8">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full max-w-md px-5 py-3 rounded-lg border border-border bg-card text-foreground shadow focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        aria-label="Search projects"
      />
    </div>
  );
};

export default SearchBar;

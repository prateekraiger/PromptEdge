import React, { useState } from "react";

const SearchBar = ({ onSearch, placeholder = "Search projects..." }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="form-control w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="input input-bordered w-full"
        aria-label="Search projects"
      />
    </div>
  );
};

export default SearchBar;

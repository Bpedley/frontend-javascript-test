import React from "react";

const SearchBar = ({ value, handleFilterChange }) => {
  const styles = {
    width: "100%",
    padding: "15px 25px",
    fontSize: "1.4rem"
  };

  return (
    <input
      value={value}
      onChange={handleFilterChange}
      style={styles}
      placeholder="Найти"
    />
  );
};

export default SearchBar;

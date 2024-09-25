import React from 'react';
import '../assets/css/search-bar.css'

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="search-bar">
      <i className="search-bar__icon fa-solid fa-magnifying-glass"></i>
      <input 
        className="search-bar__input" 
        type="text" 
        placeholder="Search..."
        value={searchValue}
        onChange={ (event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { SearchBar };
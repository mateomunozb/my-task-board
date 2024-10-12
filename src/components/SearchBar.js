import React from 'react';
import '../assets/css/search-bar.css'
import { TaskIcon } from './TaskIcon';

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="search-bar">
      <TaskIcon type="search"/>
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
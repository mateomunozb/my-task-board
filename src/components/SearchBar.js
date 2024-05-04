import '../assets/css/search-bar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <i className="search-bar__icon fa-solid fa-magnifying-glass"></i>
      <input className="search-bar__input" type="text" placeholder="Search..."/>
    </div>
  );
}

export { SearchBar };
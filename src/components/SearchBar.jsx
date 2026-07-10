function SearchBar({ value, onChange, placeholder = "Search for Movies, Events, Sports" }) {
  return (
    <input
      type="text"
      className="search-box"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
}

export default SearchBar;
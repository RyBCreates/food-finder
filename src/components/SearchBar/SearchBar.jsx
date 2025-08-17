import SearchIcon from "../../assets/search.svg";
import "./SearchBar.css";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar">
      <img className="search-bar__icon" src={SearchIcon} alt="Search Icon" />
      <input
        className="search-bar__input"
        placeholder="Find A Recipe"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>
      <button className="search-bar__submit-button">SEARCH</button>
    </div>
  );
}

export default SearchBar;

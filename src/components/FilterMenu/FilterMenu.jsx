import { useState } from "react";
import DropDown from "../../assets/drop-down-arrow.svg";
import "./FilterMenu.css";

function FilterMenu({ filter, onFilterSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value) => {
    onFilterSelect(value);
    setIsOpen(false);
  };
  return (
    <div className="filter">
      <button className="filter__button" onClick={toggleDropdown}>
        FILTER
      </button>
      <img
        className={isOpen ? "filter__icon filter__icon_open" : "filter__icon"}
        src={DropDown}
        alt="drop down arrow"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="filter__dropdown">
          <button
            className={`filter__option ${
              filter === "recent" ? "filter__option_active" : ""
            }`}
            onClick={() => handleSelect("recent")}
          >
            Most Recent
          </button>
          <button
            className={`filter__option ${
              filter === "prep-time" ? "filter__option_active" : ""
            }`}
            onClick={() => handleSelect("prep-time")}
          >
            Prep Time
          </button>
          <button
            className={`filter__option ${
              filter === "cost-per-serving" ? "filter__option_active" : ""
            }`}
            onClick={() => handleSelect("cost-per-serving")}
          >
            Cost Per Serving
          </button>
          <button
            className={`filter__option ${
              filter === "likes" ? "filter__option_active" : ""
            }`}
            onClick={() => handleSelect("likes")}
          >
            Likes
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;

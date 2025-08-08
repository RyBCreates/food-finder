import { useState } from "react";
import DropDown from "../../assets/drop-down-arrow.svg";
import "./FilterMenu.css";

function FilterMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFilterSelect = (value) => {
    setFilter(value);
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
            className="filter__option"
            onClick={() => handleFilterSelect("recent")}
          >
            Most Recent
          </button>
          <button
            className="filter__option"
            onClick={() => handleFilterSelect("prep-time")}
          >
            Prep Time
          </button>
          <button
            className="filter__option"
            onClick={() => handleFilterSelect("cost-per-serving")}
          >
            Cost Per Serving
          </button>
          <button
            className="filter__option"
            onClick={() => handleFilterSelect("likes")}
          >
            Likes
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;

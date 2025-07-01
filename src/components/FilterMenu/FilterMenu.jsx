import DropDown from "../../assets/drop-down-arrow.svg";
import "./FilterMenu.css";

function FilterMenu() {
  return (
    <div className="filter">
      <button className="filter__button">FILTER</button>
      <img className="filter__icon" src={DropDown} alt="drop down arrow" />
    </div>
  );
}

export default FilterMenu;

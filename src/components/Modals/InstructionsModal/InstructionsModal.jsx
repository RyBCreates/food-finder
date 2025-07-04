import Close from "../../../assets/close-button.svg";
import LeftArrow from "../../../assets/left-arrow.svg";
import "./InstructionsModal.css";
import "../Modals.css";

function InstructionsModal({
  activeModal,
  closeModal,
  card,
  handleSwitchClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "instructions" && "modal_opened"}`}
    >
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img className="modal__close-icon" src={Close} alt="close icon" />
        </button>
        <h2 className="modal__recipe-title">{card?.title || "Recipe"}</h2>
        <div className="modal__recipe-stats">
          <p className="modal__recipe-stat">
            Prep Time:{" "}
            <span className="modal__recipe-stat_bold">
              {card?.readyInMinutes} Min
            </span>
          </p>
          <p className="modal__recipe-stat">
            Cost Per Serving ~{" "}
            <span className="modal__recipe-stat_bold">
              ${card?.pricePerServing}
            </span>
          </p>
          <p className="modal__recipe-stat">
            Rating - <span className="modal__recipe-stat_bold">5.0</span>
          </p>
        </div>
        <div className="modal__instructions-header">
          <h3 className="modal__instructions-title">Instructions</h3>
        </div>
        <ol className="modal__instructions-list">
          <li className="modal__instructions-item">
            <p className="modal__step">Boil Water in a pot</p>
          </li>
          <li className="modal__instructions-item">
            <p className="modal__step">Put Noodles in pot</p>
          </li>
          <li className="modal__instructions-item">
            <p className="modal__step">Stir Noodles in pot</p>
          </li>
          {/* Should Be at the end of EVERY Recipe */}
          <li className="modal__instructions-item">
            <p className="modal__step">Serve and Enjoy!</p>
          </li>
        </ol>
        <button
          className="modal__switch-button modal__switch-button_instructions"
          type="button"
          onClick={handleSwitchClick}
        >
          <img className="modal__arrow" src={LeftArrow} alt="Left Arrow" />
          Checkout the Ingredients
        </button>
      </div>
    </div>
  );
}

export default InstructionsModal;

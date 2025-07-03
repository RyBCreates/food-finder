import Close from "../../../assets/close-button.svg";
import "./IngredientsModal.css";
import "../Modals.css";

function IngredientsModal({ activeModal, closeModal, card }) {
  return (
    <div className={`modal ${activeModal === "ingredients" && "modal_opened"}`}>
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
              {card?.preparationMinutes} Min
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
      </div>
    </div>
  );
}

export default IngredientsModal;

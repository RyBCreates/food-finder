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
        <h2 className="modal__recipe-title">{card?.name || "Recipe"}</h2>
      </div>
    </div>
  );
}

export default IngredientsModal;

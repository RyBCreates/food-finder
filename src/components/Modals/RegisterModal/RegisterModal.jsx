import Close from "../../../assets/close-button.svg";
import "./RegisterModal.css";
import "../Modals.css";

function RegisterModal({ activeModal, closeModal }) {
  return (
    <div className={`modal ${activeModal === "register" && "modal_opened"}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img className="modal__close-icon" src={Close} alt="close icon" />
        </button>
        <h2>This is the Login Modal</h2>
      </div>
    </div>
  );
}

export default RegisterModal;

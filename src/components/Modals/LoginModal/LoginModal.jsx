import Close from "../../../assets/close-button.svg";
import "./LoginModal.css";
import "../Modals.css";

function LoginModal({ activeModal, closeModal }) {
  return (
    <div className={`modal ${activeModal === "login" && "modal_opened"}`}>
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

export default LoginModal;

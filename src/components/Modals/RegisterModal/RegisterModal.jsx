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
        <h2>Register</h2>
        <form className="modal__form">
          <label className="modal__label">
            Username *<input placeholder="Username"></input>
          </label>
          <label className="modal__label">
            Email *<input placeholder="Example@example.com"></input>
          </label>
          <label className="modal__label">
            Password *<input placeholder="Password"></input>
          </label>
          <label className="modal__label">
            Avatar<input placeholder="Image URL"></input>
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;

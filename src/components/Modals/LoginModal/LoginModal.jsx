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
        <h2 className="modal__title modal__title_type-auth">Login</h2>
        <form className="modal__form">
          <label className="modal__label">
            Email *<input placeholder="Example@example.com"></input>
          </label>
          <label className="modal__label">
            Password *<input placeholder="Password"></input>
          </label>
          <button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

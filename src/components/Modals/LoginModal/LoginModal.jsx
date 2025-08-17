import { useState } from "react";
import Close from "../../../assets/close-icon-dark.svg";
import "./LoginModal.css";
import "../Modals.css";

function LoginModal({
  activeModal,
  closeModal,
  onLogin,
  handleSwitchAuthClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onLogin({ email, password });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={`modal ${activeModal === "login" && "modal_opened"}`}>
      <div className="modal__content modal__content_type-auth">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img className="modal__close-icon" src={Close} alt="close icon" />
        </button>
        <h2 className="modal__title modal__title_type-auth">Login</h2>
        <p className="modal__welcome-message">WELCOME BACK!</p>
        <form
          className="modal__form modal__form_type-auth"
          onSubmit={handleSubmit}
        >
          <label className="modal__label">
            Email *
            <input
              className="modal__input modal__input_type-auth"
              type="email"
              placeholder="Example@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
          </label>
          <label className="modal__label">
            Password *
            <input
              className="modal__input modal__input_type-auth"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>
          </label>
          <div className="modal__button-container">
            <button className="modal__submit-button_type-auth" type="submit">
              Log In
            </button>
            <button
              className="modal__switch-button modal__switch-button_type-auth"
              type="button"
              onClick={handleSwitchAuthClick}
            >
              or Register
            </button>
          </div>{" "}
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

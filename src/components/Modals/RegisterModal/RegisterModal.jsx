import { useEffect, useState } from "react";
import Close from "../../../assets/close-button.svg";
import "./RegisterModal.css";
import "../Modals.css";

function RegisterModal({ activeModal, closeModal, onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      onRegister({ email, username, password, avatar });
    } catch (err) {
      console.error(err.message);
    }
  };
  const modalType = "register";

  useEffect(() => {
    if (activeModal === modalType) {
      setUsername("");
      setEmail("");
      setPassword("");
      setAvatar("");
    }
  }, [activeModal]);

  return (
    <div className={`modal ${activeModal === "register" && "modal_opened"}`}>
      <div className="modal__content modal__content_type-auth">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img className="modal__close-icon" src={Close} alt="close icon" />
        </button>
        <h2 className="modal__title modal__title_type-auth">REGISTER</h2>
        <p className="modal__welcome-message">WELCOME TO FOOD FINDER</p>
        <form
          className="modal__form modal__form_type-auth"
          onSubmit={handleSubmit}
        >
          <label className="modal__label">
            Username *
            <input
              className="modal__input modal__input_type-auth"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </label>
          <label className="modal__label">
            Email *
            <input
              className="modal__input  modal__input_type-auth"
              placeholder="Example@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </label>
          <label className="modal__label">
            Password *
            <input
              className="modal__input modal__input_type-auth"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </label>
          <label className="modal__label">
            Avatar
            <input
              className="modal__input modal__input_type-auth"
              placeholder="Image URL"
              type="url"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            ></input>
          </label>
          <div className="modal__button-container">
            <button className="modal__submit-button_type-auth" type="submit">
              Register
            </button>
            <button
              className="modal__switch-button modal__switch-button_type-auth"
              type="button"
            >
              or Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;

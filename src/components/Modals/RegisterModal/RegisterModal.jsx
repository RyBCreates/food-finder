import { useState } from "react";
import Close from "../../../assets/close-button.svg";
import "./RegisterModal.css";
import "../Modals.css";
import { registerUser } from "../../../utils/user";

function RegisterModal({ activeModal, closeModal }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      registerUser(username, email, password, avatar);
    } catch (err) {
      setError(err.message);
    }
  };

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
        <h2 className="modal__title_type-auth">Register</h2>
        <form className="modal__form">
          <label className="modal__label">
            Username *
            <input
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
              placeholder="Image URL"
              type="url"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            ></input>
          </label>
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;

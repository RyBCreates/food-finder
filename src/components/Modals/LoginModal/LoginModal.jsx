import "./LoginModal.css";
import "../Modals.css";

function LoginModal({ activeModal }) {
  return (
    <div className={`modal ${activeModal === "login" && "modal_opened"}`}>
      <div className="modal__content">
        <h2>This is the Login Modal</h2>
      </div>
    </div>
  );
}

export default LoginModal;

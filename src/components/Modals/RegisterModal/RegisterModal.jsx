import "./RegisterModal.css";
import "../Modals.css";

function RegisterModal({ activeModal }) {
  return (
    <div className={`modal ${activeModal === "register" && "modal_opened"}`}>
      <div className="modal__content">
        <h2>This is the Login Modal</h2>
      </div>
    </div>
  );
}

export default RegisterModal;

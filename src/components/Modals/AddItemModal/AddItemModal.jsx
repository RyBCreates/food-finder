import { useState } from "react";
import Close from "../../../assets/close-button.svg";
import "./AddItemModal.css";
import "../Modals.css";

function AddItemModal({ activeModal, closeModal, handleAddIngredientClick }) {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddIngredientClick(name, amount);
    setAmount("");
    setName("");
    closeModal();
  }

  return (
    <div className={`modal ${activeModal === "add-item" && "modal_opened"}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img className="modal__close-icon" src={Close} alt="close icon" />
        </button>
        <h2 className="modal__title">Add an Item</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label">
            Amount
            <input
              className="modal__input"
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </label>
          <label className="modal__label">
            Item
            <input
              className="modal__input"
              type="text"
              placeholder="Item"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <button className="modal__submit-button" type="submit">
            ADD TO LIST
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;

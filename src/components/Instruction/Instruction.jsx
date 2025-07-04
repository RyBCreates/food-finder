import "./Instruction.css";

function Instruction({ instruction }) {
  return (
    <li className="modal__instructions-item">
      <p className="modal__instructions-step">{instruction.step}</p>
    </li>
  );
}

export default Instruction;

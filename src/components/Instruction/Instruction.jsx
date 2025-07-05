import "./Instruction.css";

function Instruction({ instruction }) {
  return (
    <li className="instruction__item">
      <p className="instruction__step">{instruction.step}</p>
    </li>
  );
}

export default Instruction;

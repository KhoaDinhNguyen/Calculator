import SquareRoot from "../svgComponents/SquareRoot";
import ToggleSign from "../svgComponents/ToggleSign";

import styles from "../styles/Instruction.module.css";

function Instruction({ buttonText, type, instruction }) {
  const needSvg = buttonText === "sqrt" || buttonText === "+-";

  return (
    <div className={styles.instructionContainer}>
      <button className={`${styles.button} ${styles[type]}`}>
        {buttonText === "sqrt" && <SquareRoot width="20px" height="20px" />}
        {buttonText === "+-" && <ToggleSign width="20px" height="20px" />}
        {!needSvg && <p>{buttonText}</p>}
      </button>
      <p className={styles.instructionText}>{instruction}</p>
    </div>
  );
}

export default Instruction;

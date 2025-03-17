import styles from "../styles/Instruction.module.css";

function Instruction({ buttonText, type, instruction }) {
  return (
    <div className={styles.instructionContainer}>
      <button className={`${styles.button} ${styles[type]}`}>
        <p>{buttonText}</p>
      </button>
      <p className={styles.instructionText}>{instruction}</p>
    </div>
  );
}

export default Instruction;

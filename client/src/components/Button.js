import styles from "../styles/Button.module.css";
import "../styles/Root.css";

function Button({ buttonText, onClickHandler, type }) {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClickHandler}
    >
      <p>{buttonText}</p>
    </button>
  );
}

export default Button;

import styles from "../styles/Button.module.css";

function Button({ buttonText, onClickHandler }) {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
}

export default Button;

import SquareRoot from "../svgComponents/SquareRoot";
import ToggleSign from "../svgComponents/ToggleSign";

import styles from "../styles/Button.module.css";

function Button({ buttonText, onClickHandler, type }) {
  const needSvg = buttonText === "sqrt" || buttonText === "+-";

  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClickHandler}
    >
      {buttonText === "sqrt" && <SquareRoot width="30px" height="30px" />}
      {buttonText === "+-" && <ToggleSign width="30px" height="30px" />}
      {!needSvg && <p>{buttonText}</p>}
    </button>
  );
}

export default Button;

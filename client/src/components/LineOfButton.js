import Button from "./Button";

import styles from "../styles/LineOfButton.module.css";
import "../styles/Root.css";

function LineOfButton({ buttonsText, onClickButtons, typeOfButtons }) {
  const buttonComponents = buttonsText.map((buttonText, idx) => (
    <li key={buttonText}>
      <Button
        onClickHandler={onClickButtons[idx]}
        buttonText={buttonText}
        type={typeOfButtons[idx]}
      />
    </li>
  ));

  return <ul className={styles.lineOfButton}>{buttonComponents}</ul>;
}

export default LineOfButton;

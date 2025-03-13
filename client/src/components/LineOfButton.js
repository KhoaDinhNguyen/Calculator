import Button from "./Button";

import styles from "../styles/LineOfButton.module.css";
import "../styles/Root.css";

function LineOfButton({ buttonsInText }) {
  const buttonComponents = buttonsInText.map((buttonInText) => (
    <li key={buttonInText}>
      <Button>
        <p>{buttonInText}</p>
      </Button>
    </li>
  ));

  return <ul className={styles.lineOfButton}>{buttonComponents}</ul>;
}

export default LineOfButton;

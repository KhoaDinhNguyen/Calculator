import Button from "./Button";

import styles from "../styles/LineOfButton.module.css";

function LineOfButton({ buttonsRow }) {
  const buttonComponents = buttonsRow.map((buttonObject) => (
    <li key={buttonObject.buttonText}>
      <Button
        onClickHandler={buttonObject.onClickHandler}
        buttonText={buttonObject.buttonText}
        type={buttonObject.type}
      />
    </li>
  ));

  return <ul className={styles.lineOfButton}>{buttonComponents}</ul>;
}

export default LineOfButton;

import LineOfButton from "../components/LineOfButton";
import Screen from "../components/Screen";

import styles from "../styles/SimpleCalculator.module.css";
import "../styles/Root.css";

function SimpleCalculator() {
  const configureOfSimpleCalculator = [
    ["MC", "MR", "M-", "M+", "sqrt"],
    ["%", "7", "8", "9", "/"],
    ["+-", "4", "5", "6", "*"],
    ["C", "1", "2", "3", "-"],
    ["AC", "0", ".", "=", "+"],
  ];

  const configureComponent = configureOfSimpleCalculator.map((row, idx) => {
    return (
      <li key={`row${idx + 1}`}>
        <LineOfButton buttonsInText={row} />
      </li>
    );
  });

  return (
    <div id={styles.pageView}>
      <div>
        <Screen />
        <ul id={styles.buttons}>{configureComponent}</ul>
      </div>
    </div>
  );
}

export default SimpleCalculator;

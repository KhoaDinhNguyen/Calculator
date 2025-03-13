import { useState } from "react";

import LineOfButton from "../components/LineOfButton";
import Screen from "../components/Screen";

import styles from "../styles/SimpleCalculator.module.css";
import "../styles/Root.css";

function SimpleCalculator() {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(null);
  const [nextScreenValue, setNextScreenValue] = useState(false);
  const [curretOperation, setCurrentOperation] = useState(null);
  const [currentButton, setCurrentButton] = useState(null);
  const [previousButton, setPreviousButton] = useState(null);

  const onClickNumericButton = (value) => {
    if (!nextScreenValue) {
      setCurrentValue((v) => v * 10 + value);
    } else {
      setCurrentValue(value);
      setNextScreenValue(false);
    }
    setCurrentButton(value);
  };

  const onClickOperation = (op) => {
    if (
      currentButton !== "+" &&
      currentButton !== "-" &&
      currentButton !== "*" &&
      currentButton !== "/" &&
      previousValue !== null
    ) {
      let newVal = 0;
      if (previousButton === "+") {
        newVal = previousValue + currentValue;
      } else if (previousButton === "-") {
        newVal = previousValue - currentValue;
      } else if (previousButton === "*") {
        newVal = previousValue * currentValue;
      } else if (previousButton === "/") {
        newVal = previousValue / currentValue;
      }
      setPreviousValue(newVal);
      setCurrentValue(newVal);
    } else if (previousValue === null) {
      setPreviousValue((val) => currentValue);
    }
    setPreviousButton(op);
    setCurrentButton(op);
    setCurrentOperation(op);
    setNextScreenValue(true);
  };

  const onClickEqual = () => {
    if (
      currentButton !== "+" &&
      currentButton !== "-" &&
      currentButton !== "*" &&
      currentButton !== "/" &&
      previousValue !== null
    ) {
      let newVal = 0;
      if (curretOperation === "+") {
        newVal = previousValue + currentValue;
      } else if (curretOperation === "-") {
        newVal = previousValue - currentValue;
      } else if (curretOperation === "*") {
        newVal = previousValue * currentValue;
      } else if (curretOperation === "/") {
        newVal = previousValue / currentValue;
      }
      setCurrentValue(newVal);
    } else if (previousValue === null) {
      setPreviousValue((val) => currentValue);
    }
    setPreviousValue(null);
    setPreviousButton(null);
    setCurrentOperation(null);
    setNextScreenValue(true);
    setCurrentButton("=");
  };

  const clearAllScreen = () => {
    setCurrentValue(0);
    setPreviousValue(null);
    setNextScreenValue(false);
    setCurrentButton(null);
    setCurrentOperation(null);
    setPreviousButton(null);
  };

  const configureOfSimpleCalculator = [
    ["MC", "MR", "M-", "M+", "sqrt"],
    ["%", "7", "8", "9", "/"],
    ["+-", "4", "5", "6", "*"],
    ["C", "1", "2", "3", "-"],
    ["AC", "0", ".", "=", "+"],
  ];

  const onClickCalculator = [
    [],
    [
      null,
      onClickNumericButton.bind(this, 7),
      onClickNumericButton.bind(this, 8),
      onClickNumericButton.bind(this, 9),
      onClickOperation.bind(this, "/"),
    ],
    [
      null,
      onClickNumericButton.bind(this, 4),
      onClickNumericButton.bind(this, 5),
      onClickNumericButton.bind(this, 6),
      onClickOperation.bind(this, "*"),
    ],
    [
      null,
      onClickNumericButton.bind(this, 1),
      onClickNumericButton.bind(this, 2),
      onClickNumericButton.bind(this, 3),
      onClickOperation.bind(this, "-"),
    ],
    [
      clearAllScreen,
      onClickNumericButton.bind(this, 0),
      null,
      onClickEqual,
      onClickOperation.bind(this, "+"),
    ],
  ];

  const configureComponent = configureOfSimpleCalculator.map((row, idx) => {
    return (
      <li key={`row${idx + 1}`}>
        <LineOfButton
          buttonsText={row}
          onClickButtons={onClickCalculator[idx]}
        />
      </li>
    );
  });

  return (
    <div id={styles.pageView}>
      <div>
        <Screen value={currentValue} op={curretOperation} />
        <ul id={styles.buttons}>{configureComponent}</ul>
      </div>
    </div>
  );
}

export default SimpleCalculator;

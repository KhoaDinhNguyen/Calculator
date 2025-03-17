import { useState, useEffect } from "react";

import LineOfButton from "../components/LineOfButton";
import Screen from "../components/Screen";

import formatStringNumber from "../utils/formatStringNumber";
import doOperation from "../utils/doOperation";
import toggleNumber from "../utils/toggleNumber";
import removeRightmostDigit from "../utils/removeRightmostDigit";
import doSquareRoot from "../utils/squareRoot";

import styles from "../styles/SimpleCalculator.module.css";
import "../styles/Root.css";
import SimpleInstruction from "../components/SimpleInstruction";

function SimpleCalculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [nextScreenValue, setNextScreenValue] = useState(false);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [currentButton, setCurrentButton] = useState(null);
  const [previousOperation, setPreviousOperation] = useState(null);
  const [memoryValue, setMemoryValue] = useState("0");

  useEffect(() => {
    document.title = "Calculator | Simple Calculator";
  }, []);

  const onClickNumericButton = (value) => {
    if (!nextScreenValue) {
      setCurrentValue((v) => {
        return formatStringNumber(v + value);
      });
    } else {
      setCurrentValue(formatStringNumber(value));
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
      setPreviousValue(
        doOperation(previousValue, currentValue, previousOperation)
      );
      setCurrentValue(
        doOperation(previousValue, currentValue, previousOperation)
      );
    } else if (previousValue === null) {
      setPreviousValue((val) => formatStringNumber(currentValue));
    }
    setPreviousOperation(op);
    setCurrentButton(op);
    setCurrentOperation(op);
    setNextScreenValue(true);
  };

  const onClickToggle = () => {
    setCurrentValue((val) => toggleNumber(val));
  };

  const onClickEqual = () => {
    if (
      currentButton !== "+" &&
      currentButton !== "-" &&
      currentButton !== "*" &&
      currentButton !== "/" &&
      previousValue !== null
    ) {
      setCurrentValue(
        doOperation(previousValue, currentValue, currentOperation)
      );
    } else if (previousValue === null) {
      setPreviousValue((val) => formatStringNumber(currentValue));
    }
    setPreviousValue(null);
    setPreviousOperation(null);
    setCurrentOperation(null);
    setNextScreenValue(true);
    setCurrentButton("=");
  };

  const clearRightmostDigit = () => {
    setCurrentValue((val) => formatStringNumber(removeRightmostDigit(val)));
  };

  const storeMemoryValue = () => {
    setMemoryValue((val) => formatStringNumber(currentValue));
    setNextScreenValue(true);
  };

  const recallMemoryValue = () => {
    setCurrentValue((val) => formatStringNumber(memoryValue));
  };

  const addMemoryValue = () => {
    const result = doOperation(currentValue, memoryValue, "+");
    setMemoryValue((val) => formatStringNumber(result));
    setCurrentValue((val) => formatStringNumber(result));
  };

  const addFloatingPoint = () => {
    setCurrentValue((val) => formatStringNumber(val + "."));
  };

  const getPercent = () => {
    setCurrentValue((val) => formatStringNumber(doOperation(val, "100", "/")));
  };

  const getSquareRoot = () => {
    setCurrentValue((val) => {
      const result = doSquareRoot(val);
      setNextScreenValue(true);
      return formatStringNumber(result);
    });
  };

  const clearMemory = () => {
    setMemoryValue((val) => "0");
  };

  const clearAllScreen = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setNextScreenValue(false);
    setCurrentButton(null);
    setCurrentOperation(null);
    setPreviousOperation(null);
  };

  const configureOfSimpleCalculator = [
    ["MS", "MR", "M+", "MC", "sqrt"],
    ["%", "7", "8", "9", "/"],
    ["+-", "4", "5", "6", "*"],
    ["CE", "1", "2", "3", "-"],
    ["AC", "0", ".", "=", "+"],
  ];

  const typeOfCalculator = [
    ["special", "special", "special", "special", "special"],
    ["special", "numeric", "numeric", "numeric", "basicOperator"],
    ["special", "numeric", "numeric", "numeric", "basicOperator"],
    ["delete", "numeric", "numeric", "numeric", "basicOperator"],
    ["delete", "numeric", "floatingPoint", "equal", "basicOperator"],
  ];

  const onClickCalculator = [
    [
      storeMemoryValue,
      recallMemoryValue,
      addMemoryValue,
      clearMemory,
      getSquareRoot,
    ],
    [
      getPercent,
      onClickNumericButton.bind(this, "7"),
      onClickNumericButton.bind(this, "8"),
      onClickNumericButton.bind(this, "9"),
      onClickOperation.bind(this, "/"),
    ],
    [
      onClickToggle,
      onClickNumericButton.bind(this, "4"),
      onClickNumericButton.bind(this, "5"),
      onClickNumericButton.bind(this, "6"),
      onClickOperation.bind(this, "*"),
    ],
    [
      clearRightmostDigit,
      onClickNumericButton.bind(this, "1"),
      onClickNumericButton.bind(this, "2"),
      onClickNumericButton.bind(this, "3"),
      onClickOperation.bind(this, "-"),
    ],
    [
      clearAllScreen,
      onClickNumericButton.bind(this, "0"),
      addFloatingPoint,
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
          typeOfButtons={typeOfCalculator[idx]}
        />
      </li>
    );
  });

  return (
    <div id={styles.pageView}>
      <div>
        <SimpleInstruction />
      </div>
      <div id={styles.calculator}>
        <Screen
          currentValue={currentValue}
          op={currentOperation}
          previousValue={previousValue}
          memoryValue={memoryValue}
        />
        <ul id={styles.buttons}>{configureComponent}</ul>
      </div>
    </div>
  );
}

export default SimpleCalculator;

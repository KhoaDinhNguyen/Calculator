import { useState, useEffect } from "react";

import SimpleInstruction from "../components/SimpleInstruction";
import LineOfButton from "../components/LineOfButton";
import Screen from "../components/Screen";
import buttonsConfigureMatrix from "../database/simpleButtonConfigure";

import formatStringNumber from "../utils/formatStringNumber";
import doOperation from "../utils/doOperation";
import toggleNumber from "../utils/toggleNumber";
import removeRightmostDigit from "../utils/removeRightmostDigit";
import doSquareRoot from "../utils/squareRoot";
import { applyOnClickHandler } from "../database/simpleButtonConfigure";

import styles from "../styles/SimpleCalculator.module.css";
import "../styles/Root.css";

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

  /*
    Numeric
  */
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

  for (let i = 0; i < 10; ++i) {
    applyOnClickHandler(
      i.toString(),
      onClickNumericButton.bind(this, i.toString())
    );
  }

  /*
    Basic operators
  */
  const onClickOperation = (op) => {
    if (
      currentButton !== "+" &&
      currentButton !== "-" &&
      currentButton !== "\u00d7" &&
      currentButton !== "\u00f7" &&
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

  applyOnClickHandler("\u00f7", onClickOperation.bind(this, "\u00f7"));
  applyOnClickHandler("\u00d7", onClickOperation.bind(this, "\u00d7"));
  applyOnClickHandler("+", onClickOperation.bind(this, "+"));
  applyOnClickHandler("-", onClickOperation.bind(this, "-"));

  /*
    +-: Change sign
  */
  const onClickToggle = () => {
    setCurrentValue((val) => toggleNumber(val));
  };

  applyOnClickHandler("+-", onClickToggle);

  /*
    .: Add floating-point
  */
  const addFloatingPoint = () => {
    setCurrentValue((val) => formatStringNumber(val + "."));
  };

  applyOnClickHandler(".", addFloatingPoint);

  /*
    %: Get percent
  */

  const getPercent = () => {
    setCurrentValue((val) =>
      formatStringNumber(doOperation(val, "100", "\u00f7"))
    );
  };

  applyOnClickHandler("%", getPercent);

  /*
    Get square root
  */
  const getSquareRoot = () => {
    setCurrentValue((val) => {
      const result = doSquareRoot(val);
      setNextScreenValue(true);
      return formatStringNumber(result);
    });
  };

  applyOnClickHandler("sqrt", getSquareRoot);

  /*
    =: Equal operators
  */
  const onClickEqual = () => {
    if (
      currentButton !== "+" &&
      currentButton !== "-" &&
      currentButton !== "\u00d7" &&
      currentButton !== "\u00f7" &&
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

  applyOnClickHandler("=", onClickEqual);

  /*
    MS: Memory store
  */
  const storeMemoryValue = () => {
    setMemoryValue((val) => formatStringNumber(currentValue));
    setNextScreenValue(true);
  };

  applyOnClickHandler("MS", storeMemoryValue);

  /*
    MR: Recall memory
  */
  const recallMemoryValue = () => {
    setCurrentValue((val) => formatStringNumber(memoryValue));
  };

  applyOnClickHandler("MR", recallMemoryValue);

  /*
    M+: Add memory
  */
  const addMemoryValue = () => {
    const result = doOperation(currentValue, memoryValue, "+");
    setMemoryValue((val) => formatStringNumber(result));
    setCurrentValue((val) => formatStringNumber(result));
  };

  applyOnClickHandler("M+", addMemoryValue);

  /*
    MC: Clear memory
  */
  const clearMemory = () => {
    setMemoryValue((val) => "0");
  };

  applyOnClickHandler("MC", clearMemory);

  /*
    CE: Clear rightmost digit
  */
  const clearRightmostDigit = () => {
    setCurrentValue((val) => formatStringNumber(removeRightmostDigit(val)));
  };

  applyOnClickHandler("CE", clearRightmostDigit);

  /*
    AC: Clear all the screen
  */
  const clearAllScreen = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setNextScreenValue(false);
    setCurrentButton(null);
    setCurrentOperation(null);
    setPreviousOperation(null);
  };

  applyOnClickHandler("AC", clearAllScreen);

  const configureComponent = buttonsConfigureMatrix.map((row, idx) => {
    return (
      <li key={`buttonsRow_${idx + 1}`}>
        <LineOfButton buttonsRow={row} />
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

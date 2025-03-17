import configureOfSimpleCalculator from "./simpleCalculatorConfigure";

const buttonsConfigure = [
  ["MS", "MR", "M+", "MC", "sqrt"],
  ["%", "7", "8", "9", "\u00f7"],
  ["+-", "4", "5", "6", "\u00d7"],
  ["CE", "1", "2", "3", "-"],
  ["AC", "0", ".", "=", "+"],
];

const buttonsConfigureMatrix = buttonsConfigure.map((listOfButtons) =>
  listOfButtons.map((buttonName) => {
    for (const button of configureOfSimpleCalculator) {
      if (buttonName == button.buttonText) {
        return button;
      }
    }
  })
);

export function applyOnClickHandler(buttonName, onClickHandler) {
  for (const buttonsRow of buttonsConfigureMatrix) {
    for (const button of buttonsRow) {
      if (button.buttonText == buttonName) {
        button.onClickHandler = onClickHandler;
        return;
      }
    }
  }
  return;
}

export default buttonsConfigureMatrix;

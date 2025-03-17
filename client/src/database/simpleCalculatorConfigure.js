const createButtonConfigureOfSimpleCalculator = (
  buttonText,
  onClickHandler,
  instructionText,
  type
) => {
  return {
    buttonText,
    onClickHandler,
    instructionText,
    type,
  };
};

const configureOfSimpleCalculator = [
  createButtonConfigureOfSimpleCalculator(
    "MS",
    null,
    "Store the current value to memory",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "MR",
    null,
    "Recall the memory value to the screen",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "M+",
    null,
    "Sum up the current value and the memory value, store the result in memory",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "MC",
    null,
    "Clear the memory value",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "%",
    null,
    "Divide the current value by 100",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "+-",
    null,
    "Change the sign of the current value",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "sqrt",
    null,
    "Take the square root of the current value",
    "special"
  ),
  createButtonConfigureOfSimpleCalculator(
    "CE",
    null,
    "Remove the rightmost digit on the screen",
    "delete"
  ),
  createButtonConfigureOfSimpleCalculator(
    "AC",
    null,
    "Restart the calculator, clear all the value except memory value",
    "delete"
  ),
  createButtonConfigureOfSimpleCalculator(
    "\u00f7",
    null,
    "Division",
    "basicOperator"
  ),
  createButtonConfigureOfSimpleCalculator(
    "\u00d7",
    null,
    "Multiplication",
    "basicOperator"
  ),
  createButtonConfigureOfSimpleCalculator(
    "-",
    null,
    "Subtraction",
    "basicOperator"
  ),
  createButtonConfigureOfSimpleCalculator(
    "+",
    null,
    "Addition",
    "basicOperator"
  ),
  createButtonConfigureOfSimpleCalculator("=", null, "Evaluate", "equal"),
  createButtonConfigureOfSimpleCalculator(
    ".",
    null,
    "Create floating-point number",
    "floatingPoint"
  ),
  createButtonConfigureOfSimpleCalculator("0", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("1", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("2", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("3", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("4", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("5", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("6", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("7", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("8", null, "", "numeric"),
  createButtonConfigureOfSimpleCalculator("9", null, "", "numeric"),
];

export default configureOfSimpleCalculator;

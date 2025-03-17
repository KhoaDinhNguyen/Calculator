function convertStringToNumber(number) {
  if (number.includes(".")) {
    return parseFloat(number);
  } else {
    return parseInt(number);
  }
}

function doOperation(operand1, operand2, operator) {
  const num1 = convertStringToNumber(operand1);
  const num2 = convertStringToNumber(operand2);
  let ans = null;

  if (operator === "+") {
    ans = num1 + num2;
  } else if (operator === "-") {
    ans = num1 - num2;
  } else if (operator === "\u00d7") {
    ans = num1 * num2;
  } else if (operator === "\u00f7") {
    ans = num1 / num2;
  }

  return ans.toString();
}

export default doOperation;

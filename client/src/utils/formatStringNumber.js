function formatStringNumber(input) {
  if (input.length === 0 || input === "-" || input === ".") {
    return "0";
  }
  // remove 0 leading
  while (input.length > 1 && input.charAt(0) === "0") {
    input = input.substring(1);
  }
  if (input.indexOf(".") !== input.lastIndexOf(".")) {
    input = input.substring(0, input.length - 1);
  }

  return input;
}

export default formatStringNumber;

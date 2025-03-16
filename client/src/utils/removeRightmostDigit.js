function removeRightmostDigit(input) {
  if ((input = "NaN")) {
    return "0";
  }
  let N = input.length;

  return input.substring(0, N - 1);
}

export default removeRightmostDigit;

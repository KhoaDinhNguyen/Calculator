function doSquareRoot(input) {
  if (input < 0) {
    return "NaN";
  }
  const num = parseFloat(input);

  return Math.sqrt(num).toString();
}

export default doSquareRoot;

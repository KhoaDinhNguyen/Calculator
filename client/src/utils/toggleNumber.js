function toggleNumber(number) {
  if (number.charAt(0) !== "-") {
    if (number !== "0") {
      return "-" + number;
    } else {
      return "0";
    }
  } else {
    return number.substring(1);
  }
}

export default toggleNumber;

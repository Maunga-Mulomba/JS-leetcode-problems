let plusOne = function (digits) {
  let joinNums = digits.join("");
  let singleDigit = parseInt(joinNums);
  singleDigit += 1;
  let newDigits = String(singleDigit).split("");

  return newDigits;
};

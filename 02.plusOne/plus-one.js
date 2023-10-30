let plusOne = function (digits) {
  let carry = 1; // Initialize the carry to 1, as we want to add one.
  let result = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    result.unshift(sum % 10); // Add the current digit to the result array.
    carry = Math.floor(sum / 10); // Calculate the carry for the next iteration.
  }

  if (carry > 0) {
    result.unshift(carry); // If there's a carry left, add it as a new digit.
  }

  return result;
};

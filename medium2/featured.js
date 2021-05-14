/*A featured number (something unique to this exercise) is an odd
number that is a multiple of 7, with all of its digits occurring
exactly once each. For example, 49 is a featured number, but 98
is not (it is not odd), 97 is not (it is not a multiple of 7),
and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns
the next featured number greater than the integer. Issue an error
message if there is no next featured number.
NOTE: The largest possible featured number is 9876543201.
*/


function featured(startingNum) {
  let idx = startingNum + 1;

  if (startingNum >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }

  while (true) {
    if ((idx % 7 === 0) && (idx % 2 === 1) && !repeatDigits(idx)) {
      return idx;
    }
    idx++;
  }
}

function repeatDigits(number) {
  let digits = [];
  let arr = String(number)
    .split('');
  for (let idx = 0; idx < arr.length; idx++) {
    if (digits.includes(arr[idx])) {
      return true;
    }
    digits.push(arr[idx]);
  }
  return false;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

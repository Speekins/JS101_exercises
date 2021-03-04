/*The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.*/

let numbers = '12874983';

// eslint-disable-next-line max-lines-per-function
function string2Integer(string) {
  let arrayString = string.split('');
  let numArray = [];
  let value = 0;
  for (let i = 0; i < arrayString.length; i++) {
    switch (arrayString[i]) {
      case '1': numArray.push(1);
        break;
      case '2': numArray.push(2);
        break;
      case '3': numArray.push(3);
        break;
      case '4': numArray.push(4);
        break;
      case '5': numArray.push(5);
        break;
      case '6': numArray.push(6);
        break;
      case '7': numArray.push(7);
        break;
      case '8': numArray.push(8);
        break;
      case '9': numArray.push(9);
        break;
    }
  }
  numArray.forEach(digit => (value = (10 * value) + digit));
  return value;
}

//console.log(string2Integer(numbers));

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return -string2Integer(string);
  }
  return string2Integer(string);
}

console.log(stringToSignedInteger(numbers));
console.log(stringToSignedInteger('-423') === -423);
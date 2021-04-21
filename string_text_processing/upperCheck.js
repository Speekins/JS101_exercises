/*Write a function that takes a string argument and returns true
if all of the alphabetic characters inside the string are uppercase;
false otherwise. Ignore characters that are not alphabetic.*/

function isUppercase(string) {
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] !== string[idx].toUpperCase()) {
      return false;
    }
  }
  return true;
}

//A better solution:
function isUppercase1(string) {
  return string.toUpperCase() === string;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
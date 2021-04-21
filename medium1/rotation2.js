/*Write a function that rotates the last count digits of a number.
To perform the rotation, move the first of the digits that you
want to rotate to the end and shift the remaining digits to the left.*/

function rotateRightmostDigits(number, count) {
  let string = String(number);
  let endSlice = string.slice(string.length - count);
  let frontSlice = string.slice(0, string.length - count);
  return frontSlice + rotator(endSlice);
}

function rotator(string) {
  return string.slice(1).concat(string[0]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
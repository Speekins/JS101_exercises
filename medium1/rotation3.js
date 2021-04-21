/*Take the number 735291 and rotate it by one digit to the left, 
getting 352917. Next, keep the first digit fixed in place and 
rotate the remaining digits to get 329175. Keep the first two 
digits fixed in place and rotate again to get 321759. Keep 
the first three digits fixed in place and rotate again to get 
321597. Finally, keep the first four digits fixed in place and 
rotate the final two digits to get 321579. The resulting number 
is called the maximum rotation of the original number.*/

function rotateRightmostDigits(number, count) {
  let string = String(number);
  let endSlice = string.slice(string.length - count);
  let frontSlice = string.slice(0, string.length - count);
  return frontSlice + rotator(endSlice);
}

function rotator(string) {
  return string.slice(1).concat(string[0]);
}

function maxRotation(number) {
  let totalDigits = String(number).length;
  for (let count = totalDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

console.log(maxRotation(735291));          // 321579
//maxRotation(3);               // 3
//maxRotation(35);              // 53
//maxRotation(105);             // 15 -- the leading zero gets dropped
//maxRotation(8703529146);      // 7321609845
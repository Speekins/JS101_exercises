/*Write a function that takes one integer argument, which may be
positive, negative, or zero. This method returns true if the number's
absolute value is odd. You may assume that the argument is a valid integer value.*/

function isOdd(value) {
  if ((value % 2 === 1) || (value % 2 === -1)) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(-16));
console.log(isOdd(-15));
console.log(isOdd(0));
console.log(isOdd(8));
console.log(isOdd(9));

/* ANSWER:
function isOdd(value){
  return Math.abs(value) % 2 === 1;
}*/
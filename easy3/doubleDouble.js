/*Write a function that returns the number provided as an 
argument multiplied by two, unless the argument is a double 
number; return double numbers as-is.*/

function twice(number) {
  if (isDouble(number)) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

function isDouble(number) {
  let string = number.toString();
  let center = Math.floor(string.length / 2);
  let leftNum = string.substring(0, center);
  let rightNum = string.substring(center);
  return leftNum === rightNum;
}

//Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
//Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

/*SOLUTION #1
function digitList(number) {
  let string = String(number).split('');
  let arr = [];
  for (let idx = 0; idx < string.length; idx++) {
    arr.push(Number(string[idx]));
  }
  return arr;
}

//SOLUTION #2
function digitList(number) {
  let arr = String(number).split('');
  return arr.map(digit => Number(digit));
}*/

//SOLUTION #3
function digitList(number) {
  return [...String(number)].map((digit) => Number(digit));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
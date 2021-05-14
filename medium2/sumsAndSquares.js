/*Write a function that computes the difference between the square of the sum of the
first count positive integers and the sum of the squares of the first count positive integers.*/

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

//Solution #1:
function sumSquareDifference(num) {
  return squareTheSum(num) - sumOfSquares(num);
}

function sumOfSquares(number) {
  let arr = [];
  for (let idx = 1; idx <= number; idx++) {
    arr.push(idx ** 2);
  }
  return arr.reduce((accum, val) => accum + val);
}

function squareTheSum(number) {
  let sum = 0;
  for (let idx = 1; idx <= number; idx++) {
    sum += idx;
  }
  return sum ** 2;
}

//Solution #2:

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}
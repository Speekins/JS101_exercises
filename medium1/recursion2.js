//Rewrite your recursive fibonacci function so that it computes its results without using recursion.

//Solution #1:
function fibs(nth, count = 0) {
  let num1 = 1;
  let num2 = 1;
  if (nth <= 2) {
    return num1;
  }
  for (let idx = 1; idx < nth; idx++) {
    if (idx % 2 === 1) {
      num1 += num2;
    } else if (idx % 2 === 0) {
      num2 += num1;
    }
    count += 1;
  }
  if (count % 2 === 0) {
    return num1;
  } else {
    return num2;
  }
}

//Solution #2:
function fibs1(nth) {
  let num1 = 0, num2 = 1, num3 = 1;
  for (let idx = 2; idx <= nth; idx++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  return num3;
}

//Solution #3:
function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

console.log(fibs1(1));       // 1
console.log(fibs1(2));       // 1
console.log(fibs1(3));       // 2
console.log(fibs1(4));       // 3
console.log(fibs1(5));       // 5
console.log(fibs1(6));       // 8
console.log(fibs1(7));       // 13
console.log(fibs1(8));       // 21
console.log(fibs1(9));       // 34
console.log(fibs1(10));      // 55
console.log(fibs1(11));      // 89
console.log(fibs1(12));      // 144
console.log(fibs1(13));      // 233
console.log(fibs1(20));      // 6765
console.log(fibs1(75));      // 2111485077978050
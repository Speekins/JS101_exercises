//For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

//Original:
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

//Refactored:
let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
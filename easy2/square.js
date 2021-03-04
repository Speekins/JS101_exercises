/*Using the multiply() function from the "Multiplying Two Numbers"
problem, write a function that computes the square of its argument
(the square is the result of multiplying a number by itself).*/

function multiply(a, b) {
  return a * b;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(4) === 16);
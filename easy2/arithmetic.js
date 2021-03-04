/*Write a program that prompts the user for two positive integers, and
then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.*/

const rdln = require('readline-sync');

console.log(`What is the first number?`);
let num1 = Number(rdln.question());

console.log(`What is the second number?`);
let num2 = Number(rdln.question());

function arithmetic(num1, num2) {
  let add = num1 + num2;
  let sub = num1 - num2;
  let multiply = num1 * num2;
  let divide = num1 / num2;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  return [add, sub, multiply, divide, remainder, power];
}

console.log(arithmetic(num1, num2));
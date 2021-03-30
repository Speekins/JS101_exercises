/*Write a program that solicits six numbers from the user,
then logs a message that describes whether or not the
sixth number appears amongst the first five numbers.*/

const rdln = require('readline-sync');
const NUMBERS = [];

console.log('Enter the first number.');
let first = rdln.question();

console.log('Enter the second number.');
let second = rdln.question();

console.log('Enter the third number.');
let third = rdln.question();

console.log('Enter the fourth number.');
let fourth = rdln.question();

console.log('Enter the fifth number.');
let fifth = rdln.question();

console.log('Enter the final number.');
let final = rdln.question();

NUMBERS.push(first, second, third, fourth, fifth);

if (NUMBERS.includes(final)) {
  console.log(`The first five numbers includes the final number, ${final}`);
} else {
  console.log(`The first five numbers does not include the final number, ${final}`);
}
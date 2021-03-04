/*Write a program that will ask for user's name. The program will
then greet the user. If the user writes "name!" then the computer yells back to the user.*/

const rdln = require('readline-sync');

console.log(`What is your name?`);
let name = rdln.question();

if ((name.charAt(name.length - 1) === '!') || (name === name.toUpperCase())) {
  console.log(`HELLO ${name.toUpperCase().slice(0, -1)}. WHY ARE WE YELLING?`);
} else {
  console.log(`Hello, ${name}`);
}
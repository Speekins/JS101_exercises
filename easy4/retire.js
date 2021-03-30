/*Build a program that logs when the user will retire and 
how many more years the user has to work until retirement.*/

const rdln = require('readline-sync');
let today = new Date();
let currentYear = today.getFullYear();

console.log('What is your current age?');
let currentAge = rdln.question();

console.log('At what age would you like to retire?');
let retireAge = rdln.question();

function calculateRetirementYear() {
  let yearsLeft = retireAge - currentAge;
  let retirementYear = yearsLeft + currentYear;
  console.log(`The year is ${currentYear}. You will retire in ${retirementYear}. You only have ${yearsLeft} years left to work!`);
}

calculateRetirementYear();
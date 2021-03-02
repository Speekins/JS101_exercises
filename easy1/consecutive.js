const rdln = require('readline-sync');

function prompt(statement) {
  console.log(`=> ${statement}`);
}

function computeSum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

function computeProduct(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

prompt('Please provide a number greater than 0');
let number = rdln.question();

prompt(`Would you like to add or multiply the numbers between 1 and ${number}? Hit A or M.`);
let choice = rdln.question().toUpperCase();

function programChoice() {
  if (choice === 'A') {
    return computeSum(number);
  } else {
    return computeProduct(number);
  }
}

let sumOrProduct = programChoice();

prompt(`The total of the numbers between 1 and ${number} is ${sumOrProduct}`);


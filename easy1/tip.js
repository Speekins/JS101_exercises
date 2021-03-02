//require readline-sync
//welcome user
//Ask user for bill amount
//Ask user for the tip percentage (whole number only)
//Multiply bill total by tip percentage
//Show user tip amount
//Show user total to pay (tip amount + bill amount)

const rdln = require("readline-sync");

function prompt(statement) {
  console.log(`=> ${statement}`);
}

prompt('Welcome to the TIP CALCULATOR!');

while (true) {
  prompt('What is the bill amount?');
  let bill = Number(rdln.question());

  prompt('What is the whole number tip percentage?');
  let percentage = Number(rdln.question());

  let tipTotal = bill * (percentage / 100);

  let total = bill + tipTotal;

  prompt(`The tip amount is ${tipTotal.toFixed(2)}`);

  prompt(`The total you owe today is ${total.toFixed(2)}`);

  prompt('Would you like to make another calculation? Y or N?');
  let again = rdln.question();
  if ((again === 'Y') || (again === 'y')) {
    continue;
  } else if ((again === 'N') || (again === 'n')) {
    break;
  }
}
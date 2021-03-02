//Require readline sync
//Ask user for length of room in meters
//Ask user for width of room in meters
//Perform function that multiplies the length and width
//Perform a function on the first function's return value that converts the square meter to square feet
//Log the values to the console for the user

const rdln = require('readline-sync');

function prompt(statement) {
  console.log(`=> ${statement}`);
}

prompt('Welcome to the square calculator!');

prompt('What is the length of the room in meters?');
let length = rdln.question();

prompt('What is the width of the room in meters');
let width = rdln.question();

function square(m1, m2) {
  return m1 * m2;
}

square(length, width);

function feet() {
  return square(length, width) * 10.7639;
}

feet();

prompt(`The measurement of the room is ${square(length, width)} square meters, or ${feet().toFixed(2)} square feet`);

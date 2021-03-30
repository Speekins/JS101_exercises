/*Build a program that randomly generates Teddy's age, and logs it
to the console. Have the age be a random number between 20 and 120 (inclusive).*/

/*Example output:
Teddy is 69 years old!*/

function teddyAge() {
  let number = Math.floor(Math.random() * 100) + 20;
  console.log(`Teddy is ${number} years old!`);
}

teddyAge();
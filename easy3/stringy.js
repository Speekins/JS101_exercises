/*Write a function that takes one argument, a positive integer,
and returns a string of alternating '1's and '0's, always
starting with a '1'. The length of the string should match the given integer.*/

//Solution 1:
function stringy(number) {
  let string = '10';
  if (number % 2 === 1) {
    console.log(string.repeat(number / 2) + '1');
  } else {
    console.log(string.repeat(number / 2));
  }
}

//Solution 2:
function stringy(num) {
  let string = '';
  for (let i = 0; i < num; i++) {
    let digit = ((i % 2) === 0) ? 1 : 0;
    string += digit;
  }
  console.log(string);
}

//Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
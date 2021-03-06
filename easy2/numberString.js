/*In the previous two exercises, you developed functions that convert 
simple numeric strings to signed integers. In this exercise and the 
next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) 
to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, 
such as String(), Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by 
analyzing and manipulating the number.*/

function integerToString(number) {
  let numString = '';
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    numString = remainder + numString;
  } while (number > 0);
  return numString;
}

console.log(typeof integerToString(553));
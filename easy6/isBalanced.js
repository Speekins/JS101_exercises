/*Write a function that takes a string as argument, and returns true
if all parentheses in the string are properly balanced, false otherwise.
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.*/

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

//Solution 1:
function isBalanced(string) {
  let array = string.split('');
  let open = [];
  let close = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (close.length > open.length) {
      break;
    }
    if (array[idx] === '(') {
      open.push(array[idx]);
    } else if (array[idx] === ')') {
      close.push(array[idx]);
    }
  }
  return open.length === close.length;
}

//Solution 2:
function isBalanced1(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};
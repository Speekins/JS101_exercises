/*Write a function that takes a string, doubles every character in
the string, and returns the result as a new string.*/

function repeater(string) {
  strArray = string.split('');
  return strArray.map(elem => elem + elem).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
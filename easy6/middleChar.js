/*Write a function that takes a non-empty string argument, and returns
the middle character(s) of the string. If the string has an odd
length, you should return exactly one character. If the string has
an even length, you should return exactly two characters.*/

function centerOf(string) {
  let arr = string.split('');
  let mid = arr.length / 2;
  if (arr.length % 2 === 0) {
    return arr[Math.floor(mid) - 1] + arr[Math.floor(mid)];
  } else {
    return arr[Math.floor(mid)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
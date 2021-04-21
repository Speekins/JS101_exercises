/*Write a function that takes a string argument, and returns
a list of all substrings that start from the beginning of
the string, ordered from shortest to longest.*/

//Solution #1:
function leadingSubstrings(string) {
  let strArr = [];
  for (let idx = 1; idx <= string.length; idx++) {
    strArr.push(string.slice(0, idx));
  }
  return strArr;
}

//Solution #2:
function leadingSubstrings1(string) {
  let array = [];
  string.split('').reduce((accum, current) => {
    array.push(accum + current);
    return accum + current;
  }, '');
  return array;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

console.log(leadingSubstrings1('abc'));
//console.log(leadingSubstrings2('abc'));
/*Write a function that returns a list of all palindromic substrings of
a string. That is, each substring must consist of a sequence of
characters that reads the same forward and backward. The substrings
in the returned list should be sorted by their order of appearance
in the input string. Duplicate substrings should be included multiple times.*/

function substrings(string) {
  let array = [];
  for (let idx = 0; idx < string.length; idx++) {
    let sub = string.substring(idx);
    array.push(leadingSubstrings(sub));
  }
  return array.flat();
}

function leadingSubstrings(string) {
  let strArr = [];
  for (let idx = 1; idx <= string.length; idx++) {
    strArr.push(string.slice(0, idx));
  }
  return strArr;
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('knitting cassettes'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));

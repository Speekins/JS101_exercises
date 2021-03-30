/*Write another function that returns true if the string passed as an
argument is a palindrome, or false otherwise. This time, however,
your function should be case-insensitive, and should ignore all
non-alphanumeric characters. If you wish, you may simplify things by
calling the isPalindrome function you wrote in the previous exercise.*/

function isRealPalindrome(string) {
  let backwards = string.split('').reverse().join('');
  return onlyAlphas(backwards.toLowerCase()) === onlyAlphas(string.toLowerCase());
}

function onlyAlphas(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if ((string.charCodeAt(idx) < 97 || string.charCodeAt(idx) > 122) &&
      (string.charCodeAt(idx) < 48 || string.charCodeAt(idx) > 57)) {
      newString += '';
    } else {
      newString += string[idx];
    }
  }
  return newString;
}

//Examples:
console.log(isRealPalindrome('madam'));            // True
console.log(isRealPalindrome('Madam'));            // True
console.log(isRealPalindrome(`Madam, I'm Adam`));  // True
console.log(isRealPalindrome('356653'));           // True
console.log(isRealPalindrome('123ab321'));         // false
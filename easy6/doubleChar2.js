/*Write a function that takes a string, doubles every consonant character
in the string, and returns the result as a new string. The function should
not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.*/

function doubleConsonants(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
    'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let array = string.split('');
  let doubled = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (CONSONANTS.includes(array[idx].toLowerCase())) {
      doubled.push(array[idx] + array[idx]);
    } else {
      doubled.push(array[idx]);
    }
  }
  return doubled.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
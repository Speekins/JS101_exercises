/*Write a function that takes a sentence string as an argument and
returns that string with every occurrence of a "number word" —
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' —
converted to its corresponding digit character.*/

let digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(string) {
  let keys = Object.keys(digits);
  return string.split(' ')
    .map(elem => {
      if (keys.includes(elem)) {
        return String(digits[elem]);
      } else {
        return elem;
      }
    })
    .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four . Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
/*Given a string of words separated by spaces, write a function
that swaps the first and last letters of every word.*/

function swap(string) {
  let arr = string.split(' ');
  let newArr = [];
  let almost = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let words = [];
    for (let i = arr[idx].length - 1; i >= 0; i--) {
      words.push(arr[idx][i]);
    }
    newArr.push(words);
  }
  for (let idx = 0; idx < newArr.length; idx++) {
    almost.push(newArr[idx].join(''));
  }
  return almost.join(' ');
}

//A Better Solution:
function swap(string) {
  return string.split(' ').map(word => {
    if (word.length === 1) return word;
    return word.slice(-1) + word.slice(1, -1) + word[0];
  }).join(' ');
}

//Examples:
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
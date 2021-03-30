/*Modify the wordSizes function from the previous
exercise to exclude non-letters when determining word
size. For instance, the word size of "it's" is 3, not 4.*/

function onlyAlphas(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (!(string.charCodeAt(idx) > 96 && string.charCodeAt(idx) < 123) &&
      !(string.charCodeAt(idx) > 64 && string.charCodeAt(idx) < 91) &&
      (string.charCodeAt(idx) !== 32)) {
      newString += '';
    } else {
      newString += string[idx];
    }
  }
  return newString;
}

function wordSizes(string) {
  let wordsObj = {};
  let arr = onlyAlphas(string).split(' ');
  for (let idx = 0; idx < arr.length; idx++) {
    let wordSize = arr[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!wordsObj[wordSize]) {
      wordsObj[wordSize] = 0;
    }
    wordsObj[wordSize] += 1;
  }
  return wordsObj;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
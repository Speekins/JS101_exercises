/*Write a function that takes a string consisting of zero or
more space separated words, and returns an object that
shows the number of words of different sizes.*/

function wordSizes(string) {
  let wordsObj = {};
  let arr = string.split(' ');
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

//Examples:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
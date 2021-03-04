/*Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.*/

/*function penultimate(string) {
  let stringArray = string.split(' ');
  if (stringArray.length === 1) {
    console.log(`Please use a string longer than one word.`);
  } else if (string.trim() === '') {
    console.log(`Please enter a valid string.`);
  }
  return stringArray.slice(-2, -1).toString(' ');
}

console.log(penultimate(`Where's my money?`));
console.log(penultimate(' '));
console.log(penultimate(''));
console.log(penultimate('Gary'));*/

function middleWord(string) {
  let stringArray = string.split(' ');
  if (stringArray.length < 3 || string.trim() === '') {
    console.log(`Please use a string longer than three words.`);
  } else if (stringArray.length % 2 === 0) {
    return stringArray[Math.floor(stringArray.length / 2) - 1] + ' ' + stringArray[Math.floor(stringArray.length / 2)];
  }
  return stringArray[Math.floor(stringArray.length / 2)];
}

console.log(middleWord(`And that's all i gotta say about that`));
console.log(middleWord(`Momma said life is like a box of chocolates`));
console.log(middleWord(`It's what it's`));
console.log(middleWord(` `));
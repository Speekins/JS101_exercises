/*Given a string that consists of some words and an assortment 
of non-alphabetic characters, write a function that returns 
that string with all of the non-alphabetic characters replaced 
by spaces. If one or more non-alphabetic characters occur in a 
row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).}*/

/* ANSWER 1:
function cleanUp(string) {
  return string.replace(/[\W_]+/g, " ");*/

function isLetter(str, char) {
  if (str.charCodeAt(char) >= 65 && str.charCodeAt(char) <= 90) {
    return true;
  } else if (str.charCodeAt(char) >= 97 && str.charCodeAt(char) <= 122) {
    return true;
  }
  return false;
}

function cleanUp(string) {
  let cleanString = '';
  for (let idx = 0; idx <= string.length; idx++) {
    if (isLetter(string, idx) === false) {
      cleanString[cleanString.length - 1] === ' ' ? cleanString += '' : cleanString += ' ';
    } else {
      cleanString += string[idx];
    }
  }
  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
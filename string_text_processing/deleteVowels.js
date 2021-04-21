/*Write a function that takes an array of strings and returns an array
of the same string values, but with all vowels (a, e, i, o, u) removed.*/

//Solution #1:
function removeVowels(array) {
  let consonants = array.map(elem => {
    return deleteVowels(elem.split(''));
  });
  return consonants;
}

function deleteVowels(element) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newArr = element.map(letter => {
    if (vowels.includes(letter)) {
      return '';
    } else {
      return letter;
    }
  });
  return newArr.join('');
}

//Solution #2:
function removeVowels1(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
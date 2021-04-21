/*Write a function that takes a string as an argument and returns that
string with every lowercase letter changed to uppercase and every uppercase
letter changed to lowercase. Leave all other characters unchanged.*/

//Seperate the string into an array in which each element is each character of the string
//iterate over the array using .map
//if the character is capitalized, change it to lowercase (elem === elem.toUpperCase())
//if the opposite is true, capitalize the character

function swapCase(string) {
  return string
    .split('')
    .map(elem => {
      if (elem === elem.toUpperCase()) {
        return elem.toLowerCase();
      } else if (elem === elem.toLowerCase()) {
        return elem.toUpperCase();
      }
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
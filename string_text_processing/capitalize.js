/*Write a function that takes a string as an argument and returns
that string with the first character of every word capitalized
and all subsequent characters in lowercase.*/

//intialize new array in which all the elements are each word from the string - use string.split(' ')
//iterate over the array - use .map
//Return each array element with the first letter capitalized - use elem[idx][0] + elem[idx].slice(1);
//initialize a new object equal to array.forEach()
//Return new object.join(' ')

function wordCap(string) {
  return string
    .split(' ')
    .map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
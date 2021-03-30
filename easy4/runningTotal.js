/*Write a function that takes an array of numbers, and 
returns an array with the same number of elements, with 
each element's value being the running total from the original array.*/

//EXAMPLES:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


/*function runningTotal(array) {
  let total = [];
  let sum = 0;
  for (let idx = 0; idx < array.length; idx++) {
    total.push(sum += array[idx]);
  }
  return total;
}*/

//Using .map
function runningTotal(array) {
  let total = 0;
  return array.map(x => total += x);
}

console.log(runningTotal([2, 5, 13]));
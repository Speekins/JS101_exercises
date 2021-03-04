/*Write a function that returns an Array that contains every other
element of an Array that is passed in as an argument. The values
in the returned list should be those values that are in the
1st, 3rd, 5th, and so on elements of the argument Array.*/

let arr = ['where', 'there', 'is', 'a', 'will', 'there', 'is', 'a', 'way'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddities(array) {
  let oddArr = [];
  for (let i = 0; i < array.length; i += 2) {
    oddArr.push(array[i]);
  }
  return oddArr;
}

console.log(oddities(arr));
console.log(oddities(numbers));

function evens(array) {
  let evenArr = [];
  for (let i = 1; i < array.length; i += 2) {
    evenArr.push(array[i]);
  }
  return evenArr;
}

console.log(evens(arr));
console.log(evens(numbers));



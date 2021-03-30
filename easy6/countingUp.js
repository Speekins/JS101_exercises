/*Write a function that takes an integer argument, and returns an array
containing all integers between 1 and the argument (inclusive), in ascending order.*/

function sequence(integer, arr = []) {
  for (let idx = 1; idx <= integer; idx++) {
    arr.push(idx);
  }
  return arr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
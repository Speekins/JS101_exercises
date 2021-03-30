/*Create a function that takes two integers as arguments. The first argument
is a count, and the second is the starting number of a sequence that your
function will create. The function should return an array containing the same
number of elements as the count argument. The value of each element should
be a multiple of the starting number.*/

//Solution 1:
function sequence(count, multiple) {
  let array = [];
  let idx = 1;
  while (idx <= count) {
    array.push(multiple * idx);
    idx++;
  }
  return array;
}

//Solution 2:
function sequence1(count, multiple) {
  return Array(count).fill(multiple).map((_, idx) => (idx + 1) * multiple);
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

console.log(sequence1(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence1(4, -7));         // [-7, -14, -21, -28]
console.log(sequence1(3, 0));          // [0, 0, 0]
console.log(sequence1(0, 1000000));    // []
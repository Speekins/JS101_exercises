/*Write a function that takes two array arguments, each containing a 
list of numbers, and returns a new array containing the products of 
all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.*/

function multiplyAllPairs(arr1, arr2) {
  let multiples = [];
  arr1.forEach(element1 => {
    arr2.forEach(element2 => {
      multiples.push(element2 * element1);
    });
  });
  return multiples.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
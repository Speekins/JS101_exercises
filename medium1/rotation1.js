//Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//If the input is not an array, return undefined.
//If the input is an empty array, return an empty array.

//Solution #1:
function rotateArray(array) {
  let newArr = [];
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return array;
  }

  for (let idx = 1; idx < array.length; idx++) {
    newArr.push(array[idx]);
  }
  newArr.push(array[0]);
  return newArr;
}

//Solution #2:
function rotateArray1(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
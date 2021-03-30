/*Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both
array arguments, with each element taken in alternation.

//Solution #1:
function interleave(a, b) {
  let combine = [];
  for (let idx = 0; idx < a.length; idx++) {
    combine.push(a[idx], b[idx]);
  }
  return combine;
}*/

//Solution #2:
function interleave(array1, array2) {
  let newArr = [];
  array1.forEach((element, idx) => {
    newArr.push(element, array2[idx]);
  });
  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
/*Write a function that takes an array of numbers, and returns the
sum of the sums of each leading subsequence for that array.*/

//Solution #1:
function sumOfSums(array) {
  let newArr = [];
  let sum = 0;
  array.forEach(element => {
    newArr.push(sum += element);
  });
  return newArr.reduce((accum, val) => accum + val);
}

//Solution #2:
function sumOfSums1(array, newArr = []) {
  array.reduce((a, b, idx) => {
    return newArr[idx] = a + b;
  }, 0);
  return newArr.reduce((accum, val) => accum + val);
}

//Solution #3:
function sumOfSums2(array) {
  let newArr = [];
  for (let idx = 1; idx <= array.length; idx++) {
    newArr.push(array.slice(0, idx));
  }
  return newArr.flat().reduce((accum, val) => accum + val);
}

//Solution #4:
function sumOfSums3(Arr) {
  let totalSum = 0;
  let smallSum = 0;
  for (let i = 0; i < Arr.length; i++) {
    smallSum += Arr[i];
    totalSum += smallSum;
  }
  return totalSum;
}


console.log(sumOfSums3([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums1([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4, 6, 3, 5, 8]));   // 29
console.log(sumOfSums2([1, 2, 3, 4, 5]));  // 35
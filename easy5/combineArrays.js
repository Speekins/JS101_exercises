/*Write a function that takes two arrays as arguments, and
returns an array containing the union of the values from
the two. There should be no duplication of values in the
returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.*/

function union(a, b) {
  for (let idx = 0; idx < b.length; idx++) {
    if (a.includes(b[idx])) {
      continue;
    }
    a.push(b[idx]);
  }
  console.log(a);
}

//Examples:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
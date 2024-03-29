/*Check our code below. Why do the example invocations fail with 
an error saying Maximum call stack size exceeded? Can you fix 
the code, so it runs without error and satisfies the requirements?*/

function range(start, end) {
  let range = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

/*function range(end) {
  return range(0, end);
}*/

function range1(start, end) {
  let range = [];

  if (!end) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
console.log(range1(3, 0)); //This returns incorrect results - !end will return true if end = 0 or undefined
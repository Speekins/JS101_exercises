/*Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.*/

function triangle(a, b, c) {
  if (equilateral(a, b, c) && !invalid(a, b, c)) {
    return 'equilateral';
  } else if (isosceles(a, b, c) && !invalid(a, b, c)) {
    return 'isosceles';
  } else if (scalene(a, b, c) && !invalid(a, b, c)) {
    return 'scalene';
  } else {
    return 'invalid';
  }
}

function equilateral(a, b, c) {
  return a === b && b === c;
}

function isosceles(a, b, c) {
  return (a === b && b !== c) ||
    (a !== b && a === c) ||
    (a !== b && b === c);
}

function scalene(a, b, c) {
  return a !== b && b !== c && a !== c;
}

function invalid(a, b, c) {
  let perimeter = a + b + c;
  let longest = Math.max(a, b, c);
  let shortest = Math.min(a, b, c);
  let middle = perimeter - longest - shortest;
  if (a * b * c === 0) {
    return true;
  } else if (middle + shortest < longest) {
    return true;
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
/*Write a function that takes the three angles of a triangle as arguments
and returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.*/

//Solution #1:
function triangle(a, b, c) {
  let largest = Math.max(a, b, c);

  if (invalid(a, b, c)) return 'invalid';
  if (largest < 90) return 'acute';
  if (largest > 90) return 'obtuse';
  if (largest === 90) return 'right';
}

function invalid(a, b, c) {
  let sum = a + b + c;
  let product = a * b * c;
  return (product === 0 || sum < 180);
}

//Solution #2:
function triangle1(a, b, c) {
  const angles = [a, b, c].sort((a, b) => a - b);
  if (a + b + c !== 180 || angles[0] === 0) return "invalid";
  if (angles[2] > 90) return "obtuse";
  return (angles[2] < 90 ? "acute" : "right");
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"